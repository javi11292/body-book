const { init } = require("../src/pg")

const RETRY_TIME = 1000

function exec() {
  init()
    .then(() => {
      console.log("DB initialized")
    })
    .catch(() => {
      setTimeout(exec, RETRY_TIME)
    })
}

exec()