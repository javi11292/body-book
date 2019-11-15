const express = require("express")
const router = require("./src/router")
const socket = require("./src/socket")
const cors = require("cors")
const session = require("./middleware/session")

const PORT = process.env.PORT
const app = express()

app.set("trust proxy", 1)
app.use(cors({ origin: process.env[process.env.NODE_ENV === "production" ? "ORIGIN" : "ORIGIN_DEV"], credentials: true }))
app.use(session)
app.use(express.json())
app.use(router)

const server = app.listen(PORT)

socket(server)