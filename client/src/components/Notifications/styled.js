import React from "react"
import { styled, SnackbarContent as CoreSnackbarContent } from "@material-ui/core"

/**
 * @typedef {Object} SnackbarContentProps
 * @property {"error" | "message"} variant
 */

export const SnackbarContent = styled(
  /**
   * @param {import("@material-ui/core/SnackbarContent").SnackbarContentProps & SnackbarContentProps} props 
   */
  function SnackbarContent({ variant, ...props }) {
    return <CoreSnackbarContent {...props} />
  }
)(({ theme, variant = "message" }) => ({
  backgroundColor: variant === "error" ? theme.palette.error.dark : theme.palette.primary.dark
})) 