import React from "react"
import { Snackbar } from "@material-ui/core"
import useLogic from "./useLogic"

function Notifications() {
  const { notification, handleClose, handleExited, open } = useLogic()

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      onExited={handleExited}
      autoHideDuration={2000}
      message={notification} />
  )
}

export default Notifications