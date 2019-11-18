const session = require('express-session')
const { client: redisClient } = require("../src/redis")
const RedisStore = require('connect-redis')(session)

const DAYS = 24 * 60 * 60 * 1000

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: process.env.NODE_ENV === "production" ? "none" : false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * DAYS,
  },
})