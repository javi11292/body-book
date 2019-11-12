const router = require("express").Router()
const register = require("./register")
const login = require("./login")
const status = require("./status")

router.get("/", (req, res) => res.sendStatus(200))

router.get("/status", status)

router.post("/login", login)

router.post("/register", register)

module.exports = router