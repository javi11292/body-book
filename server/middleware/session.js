const redis = require('redis')
const session = require('express-session')

const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient(process.env.REDIS_URL)

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
  },
})