const router = require("express").Router()
const register = require("./register")

router.get("/", (req, res) => res.sendStatus(200))

router.use(register)

module.exports = router