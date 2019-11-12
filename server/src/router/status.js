const pg = require("../pg")

module.exports = (req, res) => {
  return res.send({ logged: req.session.logged })
}