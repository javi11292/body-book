import { useReducer, useEffect, useCallback } from "react"
import Store, { getStore } from "libraries/Store"

const state = {}

const store = new Store(state)

export default getStore(store)