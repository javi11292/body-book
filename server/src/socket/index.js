const io = require("socket.io")
const redisAdapter = require("socket.io-redis")
const session = require("../../middleware/session")

function socket(server) {
  const socketServer = io(server)
  socketServer.use(({ request }, next) => session(request, {}, next))
  socketServer.adapter(redisAdapter(process.env.REDIS_URL))

  socketServer.on("connect", socket => {
    const { session: { username } } = socket.request
    socket.join(username)
    socket.on("message", ({ to, message }) => {
      socketServer.to(username).emit("message", { from: username, message, username: to, })
      socketServer.to(to).emit("message", { from: username, message, username })
    })
  })
}

module.exports = socket