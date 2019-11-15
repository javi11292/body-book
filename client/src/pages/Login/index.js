import React from "react"
import { Grid } from "@material-ui/core"
import { TextField } from "components"
import { Button, Container, Title } from "./styled"
import useLogic from "./useLogic"

function Login() {
  const { navigateToRegister, login, user, handleChange, handleKeyDown, addRef } = useLogic()

  return (
    <Container maxWidth="sm">
      <Grid container direction="column">
        <Title>Login</Title>
        <TextField
          inputRef={addRef}
          autoComplete="off"
          label="Usuario"
          margin="normal"
          value={user.username}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="username" />
        <TextField
          inputRef={addRef}
          type="password"
          label="Contraseña"
          margin="normal"
          value={user.password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="password" />
        <Grid container justify="space-between">
          <Button onClick={navigateToRegister}>Registrarse</Button>
          <Button onClick={login} variant="contained">Iniciar sesión</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default React.memo(Login)