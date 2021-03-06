import { useEffect } from "react"
import useStore from "hooks/useStore"
import socket from "libraries/socket"

function useLogic() {
  const [activeChat, setActiveChat] = useStore("activeChat")
  const addChat = useStore("chats", false)
  const [user] = useStore("user")

  useEffect(() => {
    socket.connect()
    socket.on("message", message => {
      addChat({ user, message })
    })

    return () => {
      socket.off("message")
      socket.disconnect()
    }
  }, [user, addChat])

  function closeChat() {
    setActiveChat({ ...activeChat, open: false })
  }

  return { activeChat, closeChat }
}

export default useLogic