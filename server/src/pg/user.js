function user(pool) {
  async function register(username, password) {
    return pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, password])
  }

  return {
    register,
  }
}

module.exports = user