import React from "react"
import { styled, Paper } from "@material-ui/core"
import { TextField } from "components"

export const Container = styled("div")({
  height: "100%",
  width: "100%",
  display: "grid",
  gridTemplateRows: "1fr auto",
})

export const Input = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
}))

export const Box = styled("div")(({ theme }) => ({
  overflowY: "auto",
  wordBreak: "break-word",
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(0.5),
}))

export const Message = styled(
  /**
   * @param {import("@material-ui/core/Paper").PaperProps} props 
   */
  function Message({ local, ...props }) {
    return <Paper {...props} />
  }
)(({ theme, local }) => ({
  display: "inline",
  margin: theme.spacing(0.5),
  padding: theme.spacing(2),
  alignSelf: local ? "flex-end" : "flex-start",
  backgroundColor: local ? "#FFFF80" : "inherit",
}))