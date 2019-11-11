require("dotenv").config()
const { init } = require("./src/pg")

const RETRY_TIME = 1000

init()
  .then(() => {
    console.log("DB initialized")
  })
  .catch(() => {
    console.log("DB already exists")
  })