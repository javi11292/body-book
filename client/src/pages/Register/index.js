import React from "react"
import { Grid } from "@material-ui/core"
import { TextField } from "components"
import { Button, Container, Title } from "pages/Login/styled"
import useLogic from "pages/Login/useLogic"

function Register() {
  const { cancel, register, user, handleChange, handleKeyDown, addRef } = useLogic()

  return (
    <Container maxWidth="sm">
      <Grid container direction="column">
        <Title>Registrarse</Title>
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
          id="password"/>
        <TextField
          inputRef={addRef}
          type="password"
          label="Confirmar contraseña"
          margin="normal"
          value={user.confirmPassword}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="confirmPassword"/>
        <Grid container justify="space-between">
          <Button onClick={cancel}>Cancelar</Button>
          <Button onClick={register} variant="contained">Confirmar</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default React.memo(Register)