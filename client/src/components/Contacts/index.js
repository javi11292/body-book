import React from "react"
import { List, ListItem, ListItemText } from "@material-ui/core"
import Chat from "components/Chat"
import { Container } from "./styled"
import useLogic from "./useLogic"

function addContact({ selectContact }) {
  return ({ username }) => (
    <ListItem
      button
      onClick={selectContact}
      data-value={username}
      key={username}>
      <ListItemText primary={username} secondary="&nbsp;" />
    </ListItem>
  )
}

function Contacts() {
  const { contacts, selectContact, activeChat } = useLogic()

  return (
    <Container>
      {activeChat.open
        ? <Chat />
        : (
          <List>
            {contacts && contacts.map(addContact({ selectContact }))}
          </List>
        )}
    </Container>
  )
}

export default React.memo(Contacts)