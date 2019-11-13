import { useEffect } from "react"
import { get } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const [contacts, setContacts] = useStore("contacts")
  const [activeChat, setActiveChat] = useStore("activeChat")

  useEffect(() => {
    async function fetchContacts() {
      const contacts = await get("/user/contacts")
      setContacts(contacts)
    }

    if (!contacts) fetchContacts()
  }, [contacts, setContacts])

  return { activeChat, setActiveChat, contacts }
}

export default useLogic