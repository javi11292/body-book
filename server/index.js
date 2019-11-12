const express = require("express")
const router = require("./src/router")
const cors = require("cors")
const session = require("./middleware/session")

const PORT = process.env.PORT
const app = express()

app.use(cors({ origin: process.env[process.env.NODE_ENV === "production" ? "ORIGIN_PROD" : "ORIGIN_DEV"], credentials: true }))
app.use(session)
app.use(express.json())
app.use(router)
app.listen(PORT)