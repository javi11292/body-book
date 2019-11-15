import React from "react"
import { format } from "date-fns"
import { Container, Input, Box, Message, DoneIcon, Info, IconContainer, InfoPlaceholder } from "./styled"
import useLogic from "./useLogic"

function addMessage(user) {
  return ({ from, message, received, read, date }, index) => {
    return (
      <Message
        local={from === user}
        key={index}>
        {message}
        <InfoPlaceholder />
        <Info>
          {format(date, "HH:mm")}
          <IconContainer>
            {user === from && <DoneIcon fontSize="inherit" received={received} />}
            {user === from && <DoneIcon fontSize="inherit" received={received} read={read} />}
          </IconContainer>
        </Info>
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