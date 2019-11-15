import { useEffect } from "react"
import { get } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const [contacts, setContacts] = useStore("contacts")
  const [activeChat, setActiveChat] = useStore("activeChat")

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

  return { activeChat, selectContact, contacts }
}

export default useLogic