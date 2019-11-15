import React from "react"
import { List, ListItem, ListItemSecondaryAction, Chip } from "@material-ui/core"
import Chat from "components/Chat"
import { Container, ListItemText } from "./styled"
import useLogic from "./useLogic"

function addContact({ selectContact, newChats }) {
  return ({ username }) => {
    const userChats = newChats[username] || { last: <span>&nbsp;</span>, size: 0 }

    return (
      <ListItem
        button
        onClick={selectContact}
        data-value={username}
        key={username}>
        <ListItemText primary={username} secondary={userChats.last} />
        <ListItemSecondaryAction>
          {userChats.size > 0 && <Chip label={userChats.size} color="primary" />}
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

function Contacts() {
  const { contacts, selectContact, activeChat, newChats } = useLogic()

  return (
    <Container>
      {activeChat.open
        ? <Chat />
        : (
          <List>
            {contacts && contacts.map(addContact({ selectContact, newChats }))}
          </List>
        )}
    </Container>
  )
}

export default React.memo(Contacts)