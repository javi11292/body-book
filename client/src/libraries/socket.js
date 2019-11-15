import io from "socket.io-client"

const host = process.env[process.env.NODE_ENV === "development" ? "REACT_APP_SERVER_DEV" : "REACT_APP_SERVER"]

const socket = io(host, { transports: ["websocket"], autoConnect: false })

export default socket