const router = require("express").Router()
const pg = require("./pg")

router.get("/", (req, res) => res.sendStatus(200))

router.put("/register", async (req, res) => {
  try {
    console.log(req.body)
    await pg.user.register(req.body.username, req.body.password)
    res.sendStatus(200)
  } catch (error) {
    switch (error.code) {
      case "23505":
        res.send({ error: "Nombre no disponible" })
      default:
        console.error(error)
        res.send({ error: "Error desconocido" })
    }
  }
})

module.exports = router