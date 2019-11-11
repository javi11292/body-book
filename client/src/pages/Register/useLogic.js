import { useState } from "react"
import { useHistory } from "react-router-dom"
import useStore from "hooks/useStore"
import { post } from "libraries/fetch"

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
    const { error, message } = await post("/register", {
      username: user.username,
      password: user.password,
    })

    if (error) {
      setNotification({ action: "add", value: error })
    } else {
      setNotification({ action: "add", value: message })
    }
  }

  function handleChange({ target }) {
    setUser(user => ({ ...user, [target.id]: target.value }))
  }

  return { cancel, register, user, handleChange }
}

export default useLogic