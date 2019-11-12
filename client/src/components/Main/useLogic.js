import { useEffect } from "react"
import { get } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const [logged, setLogged] = useStore("logged")

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