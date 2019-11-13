import React from "react"
import Contacts from "components/Contacts"
import { Box } from "./styled"

function Home() {
  return (
    <Box>
      <Contacts />
    </Box>
  )
}

export default React.memo(Home)