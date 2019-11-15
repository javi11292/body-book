import React from "react"
import { styled, Container as CoreContainer, Typography } from "@material-ui/core"
import { Button as CoreButton } from "components"

export const Button = styled(CoreButton)({
  margin: "1.5rem 0",
})

export const Container = styled(CoreContainer)({
  padding: "1rem",
})

export const Title = styled(
  /**
   * @param {import("@material-ui/core/Typography").TypographyProps} props 
   */
  function Title(props) {
    return <Typography variant="h4" {...props} />
  }
)({
  margin: "1rem 0",
  alignSelf: "center",
})