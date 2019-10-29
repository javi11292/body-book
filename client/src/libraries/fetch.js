export async function post(path, body) {
  const response = await fetch(`${process.env.REACT_APP_SERVER}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}