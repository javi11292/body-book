import React from "react"
import { Container } from "./styled"

function Chat({ username }) {
  return (
    <Container>
      <span>Chat with {username}</span>
    </Container>
  )
}

export default React.memo(Chat)