import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { get } from "libraries/fetch"

function useLogic() {
  const history = useHistory()
  const [logged, setLogged] = useState()

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
      setLogged(!!message)
    }

    checkSession()

    function callback({ detail }) {
      setLogged(detail)
    }

    window.addEventListener("status", callback)

    return () => window.removeEventListener("status", callback)
  }, [setLogged])

  return { logged }
}

export default useLogic