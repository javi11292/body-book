export async function post(path, body) {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}${path}`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) return { error: response.statusText }

    const text = await response.text()
    try {
      return JSON.parse(text)
    } catch {
      return text
    }
  } catch (error) {
    return { error: error.message }
  }
}

export async function get(path) {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}${path}`, {
      credentials: "include",
    })

    if (!response.ok) return { error: response.statusText }

    const text = await response.text()
    try {
      return JSON.parse(text)
    } catch {
      return text
    }
  } catch (error) {
    return { error: error.message }
  }
}