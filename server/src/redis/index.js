const redis = require('redis')
const { promisify } = require("util")

const client = redis.createClient(process.env.REDIS_URL)
const add = promisify(client.zadd).bind(client)
const remove = promisify(client.zremrangebyscore).bind(client)
const range = promisify(client.zrange).bind(client)

async function addMessage(message) {
  const stringMessage = JSON.stringify(message)
  return await Promise.all([
    add(message.to, message.date, stringMessage),
    add(message.from, message.date, stringMessage),
  ])
}

async function removeMessage({ to, date, from }) {
  return await Promise.all([
    remove(to, date, date),
    remove(from, date, date)
  ])
}

async function getMessages(username) {
  return await range(username, 0, -1)
}

module.exports = {
  client,
  addMessage,
  removeMessage,
  getMessages,
}