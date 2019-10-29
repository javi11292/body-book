import { useState } from "react"
import { useHistory } from "react-router-dom"
import useStore from "hooks/useStore"

function useLogic() {
  const setNotification = useStore("notifications", false)
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })
  const history = useHistory()

  function cancel() {
    history.push("")
  }

  async function register() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/register`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })

    const { error } = await response.json()
    setNotification({ action: "add", value: error })
  }

  function handleChange({ target }) {
    setUser(user => ({ ...user, [target.id]: target.value }))
  }

  return { cancel, register, user, handleChange }
}

export default useLogic