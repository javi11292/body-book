function init(pool) {
  return async () => pool.query(`CREATE TABLE users (
    username VARCHAR (50) UNIQUE NOT NULL, 
    password VARCHAR (50) NOT NULL
  )`)
}

module.exports = init