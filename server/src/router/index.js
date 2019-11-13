const router = require("express").Router()
const status = require("./status")
const user = require("./user")

router.get("/", (req, res) => res.sendStatus(200))

router.get("/status", status)

router.use("/user", user)

module.exports = router