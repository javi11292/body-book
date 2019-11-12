function user(pool) {
  async function register(username, password) {
    if (!username) throw new Error("Usuario inválido")
    if (!password) throw new Error("Contraseña inválida")
    return pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, password])
  }

  async function login(username, password) {
    if (!username) throw new Error("Usuario inválido")
    if (!password) throw new Error("Contraseña inválida")
    const { rows } = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password])
    if (rows.length === 0) throw new Error("Usuario inválido")
  }

  return {
    register,
    login,
  }
}

module.exports = user