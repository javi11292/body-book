const pg = require("../pg")

module.exports = async (req, res) => {
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
}