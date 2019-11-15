import React from "react"
import { Container, Input, Box, Message } from "./styled"
import useLogic from "./useLogic"

function addMessage(user) {
  return ({ from, message }, index) => {
    return (
      <Message
        local={from === user}
        key={index}>
        {message}
      </Message>
    )
  }
}

function Chat() {
  const {
    user,
    handleScroll,
    chatRef,
    handleKeyDown,
    message,
    handleChange,
    chat,
  } = useLogic()

  return (
    <Container>
      <Box
        onScroll={handleScroll}
        ref={chatRef}>
        {chat.map(addMessage(user))}
      </Box>
      <Input
        autoComplete="off"
        label="Mensaje"
        margin="normal"
        variant="outlined"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown} />
    </Container>
  )
}

export default React.memo(Chat)