import { useState, useRef, useLayoutEffect, useEffect } from "react"
import socket from "libraries/socket"
import useStore from "hooks/useStore"
import useUserChats from "hooks/useUserChats"

function useLogic() {
  const chatRef = useRef()
  const scrolled = useRef(false)
  const [message, setMessage] = useState("")
  const [activeChat] = useStore("activeChat")
  const setChat = useStore("chats", false)
  const [user] = useStore("user")
  const userChats = useUserChats()

  useEffect(() => {
    userChats.forEach(chat => {
      if (chat.received && !chat.read && user === chat.to) {
        socket.emit("read", chat)
      }
    })
  }, [userChats, setChat, user])

  useLayoutEffect(() => {
    if (!scrolled.current) chatRef.current.scrollTop = chatRef.current.scrollHeight - chatRef.current.offsetHeight
  }, [userChats])

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
    user,
    handleScroll,
    chatRef,
    handleKeyDown,
    message,
    handleChange,
    chat: userChats,
  }
}

export default useLogic