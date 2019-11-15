const pg = require("../pg")

module.exports = (req, res) => {
  return res.send({ message: req.session.username })
}