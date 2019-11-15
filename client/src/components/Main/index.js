import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import useLogic from "./useLogic"

const login = import("pages/Login")
const register = import("pages/Register")
const home = import("pages/Home")

const Login = React.lazy(() => login)
const Register = React.lazy(() => register)
const Home = React.lazy(() => home)

function Main() {
  const { user } = useLogic()

  return (
    <Switch>
      <Route path="/login">
        {user && <Redirect to="/" />}
        <Login />
      </Route>
      <Route path="/register">
        {user && <Redirect to="/" />}
        <Register />
      </Route>
      <Route>
        {user === null && <Redirect to="/login" />}
        <Home />
      </Route>
    </Switch>
  )
}

export default React.memo(Main)