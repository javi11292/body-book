const pg = require("../pg")

module.exports = async (req, res) => {
  try {
    await pg.user.login(req.body.username, req.body.password)
    req.session.logged = true
    res.sendStatus(200)
  } catch (error) {
    res.send({ error: "Usuario inválido" })
  }
}