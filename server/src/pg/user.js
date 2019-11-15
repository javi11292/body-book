function user(pool) {
  async function register(username, password) {
    if (!username) throw new Error("Usuario inválido")
    if (!password) throw new Error("Contraseña inválida")
    return pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, password])
  }

  async function login(username, password) {
    if (!username) throw new Error("Usuario inválido")
    if (!password) throw new Error("Contraseña inválida")
    const { rows } = await pool.query("SELECT username FROM users WHERE username = $1 AND password = $2", [username, password])
    if (rows.length === 0) throw new Error("Usuario inválido")
  }

  async function getContacts(username) {
    if (!username) throw new Error("Usuario inválido")
    const { rows } = await pool.query("SELECT username FROM users WHERE username != $1", [username])
    return rows
  }

  return {
    register,
    login,
    getContacts,
  }
}

module.exports = user