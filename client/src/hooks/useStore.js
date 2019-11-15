import getStore from "libraries/store"
import socket from "libraries/socket"

const store = {
  user: {
    value: undefined,
    reducer: (state, value) => value,
  },
  contacts: {
    value: undefined,
    reducer: (state, value) => value,
  },
  activeChat: {
    value: {},
    reducer: (state, value) => value,
  },
  chats: {
    value: {},
    reducer: (state, { user, message }) => {
      const entries = message instanceof Array ? message : [message]

      function addEntry(acc, entry) {
        const message = typeof entry === "string" ? JSON.parse(entry) : entry
        const { to, from, date } = message
        const id = from === user ? to : from
        const userChats = acc[id] || {}

        if (from !== user && !message.received) socket.emit("received", message)

        return {
          ...acc,
          [id]: {
            ...userChats,
            [date]: message,
          },
        }
      }

      return entries.reduce(addEntry, state)
    },
  },
  notifications: {
    value: [],
    reducer: (state, { action, value, type }) => {
      switch (action) {
        case "add":
          return [...state, { value, type }]
        case "remove":
          return state.slice(0, -1)
        default:
          return state
      }
    },
  }
}

export default getStore(store)