import React from "react"
import { styled, Paper } from "@material-ui/core"
import { Done } from "@material-ui/icons"
import { TextField } from "components"

export const Container = styled("div")({
  height: "100%",
  width: "100%",
  display: "grid",
  gridTemplateRows: "1fr auto",
})

export const Input = styled(TextField)({
  margin: "0.5rem",
})

export const Box = styled("div")({
  overflowY: "auto",
  wordBreak: "break-word",
  display: "flex",
  flexDirection: "column",
  margin: "0.25rem",
})

export const DoneIcon = styled(
  /**
   * @param {import("@material-ui/core/SvgIcon").SvgIconProps} props 
   */
  function DoneIcon({ read, received, ...props }) {
    return <Done {...props} />
  }
)(({ read, received }) => ({
  position: "relative",
  visibility: !received || read === false ? "hidden" : undefined,
  gridArea: "icon",
  top: read ? "0.28rem" : undefined,
}))

export const Message = styled(
  /**
   * @param {import("@material-ui/core/Paper").PaperProps} props 
   */
  function Message({ local, ...props }) {
    return <Paper {...props} />
  }
)(({ local }) => ({
  position: "relative",
  borderRadius: "1rem",
  display: "inline",
  margin: "0.25rem",
  padding: "1rem",
  alignSelf: local ? "flex-end" : "flex-start",
  backgroundColor: local ? "#FFFF80" : "inherit",
}))

export const Info = styled("span")({
  position: "absolute",
  bottom: "0.5rem",
  right: "0.75rem",
  fontSize: "0.75rem",
  color: "grey",
})

export const InfoPlaceholder = styled("span")({
  width: "3.5rem",
  display: "inline-block",
})

export const IconContainer = styled("span")({
  position: "relative",
  display: "inline-grid",
  gridTemplateAreas: "icon",
  marginLeft: "0.1rem",
})