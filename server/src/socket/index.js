const io = require("socket.io")
const redisAdapter = require("socket.io-redis")
const session = require("../../middleware/session")
const { getMessages, addMessage, removeMessage } = require("../redis")
const createMessage = require("../models/message")

function socket(server) {
  const socketServer = io(server)
  socketServer.use(({ request }, next) => session(request, {}, next))
  socketServer.adapter(redisAdapter(process.env.REDIS_URL))
  socketServer.on("connect", handleSocket(socketServer))
}

function handleSocket(socketServer) {
  return async socket => {
    const { session: { username } } = socket.request

    function handleMessage(response) {
      const message = createMessage(response, username)
      sendMessage(message, message.to)
      addMessage(message)
    }

    async function handleReceived(message) {
      const receivedMessage = { ...message, received: true }
      sendMessage(receivedMessage, receivedMessage.from)
      await removeMessage(receivedMessage)
      addMessage(receivedMessage)
    }

    function handleRead(message) {
      const readMessage = { ...message, read: true }
      sendMessage(readMessage, readMessage.from)
      removeMessage(readMessage)
    }

    function sendMessage(message, to) {
      socketServer.to(username).emit("message", message)
      socketServer.to(to).emit("message", message)
    }

    socket.join(username)
    socket.emit("message", await getMessages(username))
    socket.on("message", handleMessage)
    socket.on("read", handleRead)
    socket.on("received", handleReceived)
  }
}

module.exports = socket