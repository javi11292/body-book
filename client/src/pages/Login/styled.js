import React from "react"
import { styled, Container as CoreContainer, Typography } from "@material-ui/core"
import { Button as CoreButton } from "components"

export const Button = styled(CoreButton)(({ theme }) => ({
  margin: theme.spacing(3, 0),
}))

export const Container = styled(CoreContainer)(({ theme }) => ({
  padding: theme.spacing(2),
}))

export const Title = styled(
  /**
   * @param {import("@material-ui/core/Typography").TypographyProps} props 
   */
  function Title(props) {
    return <Typography variant="h4" {...props} />
  }
)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  alignSelf: "center",
}))