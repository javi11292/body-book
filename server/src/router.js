const router = require("express").Router()
const pg = require("./pg")

router.get("/", (req, res) => res.sendStatus(200))

router.post("/register", async (req, res) => {
  try {
    await pg.user.register(req.body.username, req.body.password)
    res.send({ message: "Usuario registrado con éxito" })
  } catch (error) {
    switch (error.code) {
      case "23505":
        res.send({ error: "Nombre de usuario no disponible" })
        return
      default:
        res.send({ error: error.message })
        return
    }
  }
})

module.exports = router