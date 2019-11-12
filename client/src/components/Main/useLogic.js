import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { get } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const history = useHistory()
  const [logged, setLogged] = useStore("logged")

  useEffect(() => {
    const location = sessionStorage.getItem("location")
    if (location) {
      history.push(location)
      sessionStorage.removeItem("location")
    }
  }, [history])

  useEffect(() => {
    async function checkSession() {
      const { logged } = await get("/status")
      setLogged(!!logged)
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