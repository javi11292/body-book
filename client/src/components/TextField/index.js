import React from "react"
import { TextField as CoreTextField } from "@material-ui/core"

/** 
 * @param {import("@material-ui/core/TextField").TextFieldProps} props
 */
function TextField(props) {
  return <CoreTextField variant="filled" {...props} />
}

export default TextField