import React from "react"
import { Container } from "./styled"
import useLogic from "./useLogic"

function addContact({ username }) {
  return username
}

function Contacts() {
  const { contacts } = useLogic()

  return (
    <Container>
      {contacts && contacts.map(addContact)}
    </Container>
  )
}

export default React.memo(Contacts)