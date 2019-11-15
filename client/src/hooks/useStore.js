import getStore from "libraries/store"

export default getStore({
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
    reducer: (state, { from, message, username }) => ({
      ...state,
      [username]: state[username] ? [...state[username], { message, from }] : [{ message, from }],
    }),
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
})