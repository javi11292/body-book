import { useState, useRef, useLayoutEffect } from "react"
import socket from "libraries/socket"
import useStore from "hooks/useStore"

function useLogic() {
  const chatRef = useRef()
  const scrolled = useRef(false)
  const [message, setMessage] = useState("")
  const [activeChat] = useStore("activeChat")
  const [chats] = useStore("chats")

  useLayoutEffect(() => {
    if (!scrolled.current) chatRef.current.scrollTop = chatRef.current.scrollHeight - chatRef.current.offsetHeight
  }, [chats, activeChat])

  function handleKeyDown({ key }) {
    if (message && key === "Enter") {
      socket.emit("message", { to: activeChat.username, message })
      setMessage("")
    }
  }

  function handleChange({ target }) {
    setMessage(target.value)
  }

  function handleScroll({ currentTarget: { scrollHeight, scrollTop, offsetHeight } }) {
    scrolled.current = scrollTop !== scrollHeight - offsetHeight
  }

  return {
    handleScroll,
    chatRef,
    handleKeyDown,
    message,
    handleChange,
    chat: chats[activeChat.username] || [],
  }
}

export default useLogic