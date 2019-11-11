function user(pool) {
  async function register(username, password) {
    if (!username) throw new Error("Usuario inválido")
    if (!password) throw new Error("Contraseña inválida")
    return pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, password])
  }

  return {
    register,
  }
}

module.exports = user