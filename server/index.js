const express = require("express")
const router = require("./src/router")
const cors = require("cors")

const PORT = process.env.PORT
const app = express()

function onReady() {
  console.log(`Listening on port ${PORT}`)
}

app.use(cors())
app.use(express.json())
app.use(router)
app.listen(PORT, onReady)