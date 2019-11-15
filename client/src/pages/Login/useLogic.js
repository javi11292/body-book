import { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import useStore from "hooks/useStore"
import { post } from "libraries/fetch"

function useLogic() {
  const inputRefs = useRef([])
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
    const { error } = await post("/user/login", {
      username: user.username,
      password: user.password,
    })

    if (error) {
      setNotification({ action: "add", value: error, type: "error" })
    } else {
      window.dispatchEvent(new CustomEvent("status", { detail: user.username }))
    }
  }

  async function register() {
    if (user.password !== user.confirmPassword) {
      setNotification({ action: "add", value: "Las contraseñas no coinciden", type: "error" })
      return
    }

    const { error, message } = await post("/user/register", {
      username: user.username,
      password: user.password,
    })

    if (error) {
      setNotification({ action: "add", value: error, type: "error" })
    } else {
      setNotification({ action: "add", value: message })
      history.push("/login")
    }
  }

  function handleChange({ target }) {
    setUser(user => ({ ...user, [target.id]: target.value }))
  }

  function handleKeyDown({ key, target }) {
    if (key === "Enter") {
      if (target.id === "username") inputRefs.current.password.focus()

      if (target.id === "password") {
        if (inputRefs.current.confirmPassword) {
          inputRefs.current.password.focus()
        } else {
          login()
        }
      }

      if (target.id === "confirmPassword") register()
    }
  }

  function addRef(element) {
    if (!element) return
    inputRefs.current[element.id] = element
  }

  return { cancel, navigateToRegister, register, login, user, handleChange, handleKeyDown, addRef }
}

export default useLogic