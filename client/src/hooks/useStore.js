import getStore from "libraries/store"

export default getStore({
  notifications: {
    value: [],
    reducer: (state, { action, value }) => {
      switch (action) {
        case "add":
          return [...state, value]
        case "remove":
          return state.slice(0, -1)
        default:
          return state
      }
    },
  }
})