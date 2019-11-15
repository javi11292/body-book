import { useEffect, useState } from "react"
import { get } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const [contacts, setContacts] = useStore("contacts")
  const [activeChat, setActiveChat] = useStore("activeChat")
  const [chats] = useStore("chats")
  const [user] = useStore("user")
  const [newChats, setNewChats] = useState({})

  useEffect(() => {
    const newChats = Object
      .entries(chats)
      .reduce((acc, [key, userChats]) => {
        const chats = Object.values(userChats).reduce((acc, chat) => {
          if (user === chat.from || chat.read) return { ...acc, last: chat.message }
          return {
            last: chat.message,
            size: acc.size + 1,
          }
        }, { size: 0 })

        return {
          ...acc,
          [key]: chats
        }
      }, {})

    setNewChats(newChats)
  }, [chats, user])

  useEffect(() => {
    async function fetchContacts() {
      const { message } = await get("/user/contacts")
      setContacts(message)
    }

    if (!contacts) fetchContacts()
  }, [contacts, setContacts])

  function selectContact({ currentTarget }) {
    setActiveChat({ open: true, username: currentTarget.dataset.value })
  }

  return { activeChat, selectContact, contacts, newChats }
}

export default useLogic