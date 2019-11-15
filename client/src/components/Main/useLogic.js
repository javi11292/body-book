import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { get } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const history = useHistory()
  const [user, setUser] = useStore("user")

  useEffect(() => {
    const location = sessionStorage.getItem("location")
    if (location) {
      history.push(location)
      sessionStorage.removeItem("location")
    }
  }, [history])

  useEffect(() => {
    async function checkSession() {
      const { message } = await get("/status")
      setUser(message || null)
    }

    checkSession()

    function callback({ detail }) {
      setUser(detail)
    }

    window.addEventListener("status", callback)

    return () => window.removeEventListener("status", callback)
  }, [setUser])

  return { user }
}

export default useLogic