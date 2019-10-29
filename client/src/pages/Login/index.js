import React from "react"
import { Grid } from "@material-ui/core"
import { TextField } from "components"
import { Button, Container, Title } from "./styled"
import useLogic from "./useLogic"

function Login() {
  const { register } = useLogic()
  
  return (
    <Container maxWidth="sm">
      <Grid container direction="column">
        <Title>Login</Title>
        <TextField label="Usuario" margin="normal" />
        <TextField label="Contraseña" margin="normal" />
        <Grid container justify="space-between">
          <Button onClick={register}>Registrarse</Button>
          <Button variant="contained">Iniciar sesión</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login