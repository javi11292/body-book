import React from "react"
import { Container, Input, Box } from "./styled"
import useLogic from "./useLogic"

function addMessage({ from, message }, index) {
  return (
    <div key={index}>
      {message}
    </div>
  )
}

function Chat() {
  const {
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
        {chat.map(addMessage)}
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