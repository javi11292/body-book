import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import useLogic from "./useLogic"

const modules = [
  import("pages/Login"),
  import("pages/Register"),
]

const Login = React.lazy(() => modules[0])
const Register = React.lazy(() => modules[1])

function Main() {
  const { logged } = useLogic()

  if (logged === undefined) return null

  return (
    <Switch>
      <Route path="/login">
        {logged && <Redirect to="/" />}
        <Login />
      </Route>
      <Route path="/register">
        {logged && <Redirect to="/" />}
        <Register />
      </Route>
      <Route>
        {!logged && <Redirect to="/login" />}
        <span>Home</span>
      </Route>
    </Switch>
  )
}

export default Main