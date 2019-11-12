const { init } = require("../src/pg")

const RETRY_TIME = 1000

init()
  .then(() => {
    console.log("DB initialized")
  })
  .catch(error => {
    console.error(error)
  })