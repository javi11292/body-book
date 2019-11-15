import { styled, IconButton } from "@material-ui/core"

export const Box = styled("div")({
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "grid",
  gridTemplateRows: "auto 1fr",
  overflow: "hidden",
})

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  overflow: "auto",
}))

export const Icon = styled(IconButton)({
  marginRight: "1rem",
})