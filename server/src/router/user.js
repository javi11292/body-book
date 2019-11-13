const router = require("express").Router()
const pg = require("../pg")

router.post("/login", async (req, res) => {
  try {
    await pg.user.login(req.body.username, req.body.password)
    req.session.user = req.body.username
    res.sendStatus(200)
  } catch (error) {
    res.send({ error: error.message })
  }
})

router.post("/register", async (req, res) => {
  try {
    await pg.user.register(req.body.username, req.body.password)
    res.send({ message: "Registrado con éxito" })
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

router.get("/contacts", async (req, res) => {
  try {
    res.send(await pg.user.getContacts(req.session.user))
  } catch (error) {
    res.send({ error: error.message })
  }
})

module.exports = router