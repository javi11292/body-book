import { styled } from "@material-ui/core"
import { ListItemText as CoreListItemText } from "@material-ui/core"

export const Container = styled("div")({
  height: "100%",
  width: "100%",
})

export const ListItemText = styled(CoreListItemText)({
  overflow: "hidden",
  whiteSpace: "nowrap",
})