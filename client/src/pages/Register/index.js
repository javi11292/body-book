import React from "react"
import { Grid } from "@material-ui/core"
import { TextField } from "components"
import { Button, Container, Title } from "pages/Login/styled"
import useLogic from "./useLogic"

function Register() {
  const { cancel, register, user, handleChange } = useLogic()

  return (
    <Container maxWidth="sm">
      <Grid container direction="column">
        <Title>Register</Title>
        <TextField
          autoComplete="off"
          label="Usuario"
          margin="normal"
          value={user.username}
          onChange={handleChange}
          id="username" />
        <TextField
          type="password"
          label="Contraseña"
          margin="normal"
          value={user.password}
          onChange={handleChange}
          id="password" />
        <TextField
          type="password"
          label="Confirmar contraseña"
          margin="normal"
          value={user.confirmPassword}
          onChange={handleChange}
          id="confirmPassword" />
        <Grid container justify="space-between">
          <Button onClick={cancel}>Cancelar</Button>
          <Button onClick={register} variant="contained">Confirmar</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register