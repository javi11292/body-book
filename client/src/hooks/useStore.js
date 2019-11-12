import getStore from "libraries/store"

export default getStore({
  logged: {
    value: undefined,
    reducer: (state, value) => value,
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