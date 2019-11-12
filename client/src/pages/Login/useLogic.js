import { useState } from "react"
import { useHistory } from "react-router-dom"
import useStore from "hooks/useStore"
import { post } from "libraries/fetch"

function useLogic() {
  const history = useHistory()
  const setNotification = useStore("notifications", false)
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })

  function cancel() {
    history.goBack()
  }

  function navigateToRegister() {
    history.push("/register")
  }

  async function login() {
    const { error } = await post("/login", {
      username: user.username,
      password: user.password,
    })

    if (error) {
      setNotification({ action: "add", value: error })
    } else {
      window.dispatchEvent(new CustomEvent("status", { detail: true }))
    }
  }

  async function register() {
    if (user.password !== user.confirmPassword) {
      setNotification({ action: "add", value: "Las contraseñas no coinciden" })
      return
    }

    const { error, message } = await post("/register", {
      username: user.username,
      password: user.password,
    })

    if (error) {
      setNotification({ action: "add", value: error })
    } else {
      setNotification({ action: "add", value: message })
      history.push("/login")
    }
  }

  function handleChange({ target }) {
    setUser(user => ({ ...user, [target.id]: target.value }))
  }

  return { cancel, navigateToRegister, register, login, user, handleChange }
}

export default useLogic