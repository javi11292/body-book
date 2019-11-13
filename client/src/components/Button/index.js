import React from "react"
import { Button as CoreButton } from "@material-ui/core"

/** 
 * @param {import("@material-ui/core/Button").ButtonProps} props
 */
function Button(props) {
  return <CoreButton color="primary" {...props} />
}

export default React.memo(Button)