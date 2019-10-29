import { useHistory } from "react-router-dom"

function useLogic() {
  const history = useHistory()

  function register() {
    history.push("/register")
  }

  return { register }
}

export default useLogic