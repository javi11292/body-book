import { useState } from "react"
import socket from "libraries/socket"
import useStore from "hooks/useStore"

function useLogic() {
  const [message, setMessage] = useState("")
  const [activeChat] = useStore("activeChat")
  const [chats] = useStore("chats")

  function handleKeyDown({ key }) {
    if (message && key === "Enter") {
      socket.emit("message", { to: activeChat.username, message })
      setMessage("")
    }
  }

  function handleChange({ target }) {
    setMessage(target.value)
  }

  return { handleKeyDown, message, handleChange, chat: chats[activeChat.username] || [] }
}

export default useLogic