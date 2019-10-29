const { Pool } = require("pg")
const user = require("./user")

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production",
})

module.exports = {
  user: user(pool),
}  