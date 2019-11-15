import { useMemo } from "react"
import useStore from "hooks/useStore"

function useUserChats() {
  const [chats] = useStore("chats")
  const [activeChat] = useStore("activeChat")

  return useMemo(() => Object.values(chats[activeChat.username] || {}), [chats, activeChat])
}

export default useUserChats