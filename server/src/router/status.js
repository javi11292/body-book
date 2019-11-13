const pg = require("../pg")

module.exports = (req, res) => {
  return res.send({ user: req.session.user })
}