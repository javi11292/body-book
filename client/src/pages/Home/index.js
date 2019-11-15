import React from "react"
import Contacts from "components/Contacts"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons"
import { Box, Container, Icon } from "./styled"
import useLogic from "./useLogic"

function Title({ children }) {
  return <Typography variant="h6">{children}</Typography>
}

function Home() {
  const { activeChat, closeChat } = useLogic()

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          {activeChat.open ? (
            <>
              <Icon
                onClick={closeChat}
                edge="start"
                color="inherit">
                <ArrowBack />
              </Icon>
              <Title>{activeChat.username}</Title>
            </>
          ) : <Title>BodyBook</Title>}
        </Toolbar>
      </AppBar>
      <Container>
        <Contacts />
      </Container>
    </Box>
  )
}

export default React.memo(Home)