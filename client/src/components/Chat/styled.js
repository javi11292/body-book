import { styled } from "@material-ui/core"
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

export const Box = styled("div")({
  overflowY: "auto",
  wordBreak: "break-word",
})