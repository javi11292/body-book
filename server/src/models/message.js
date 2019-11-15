function createMessage(message, username) {
  return {
    date: Date.now(),
    read: false,
    received: false,
    from: username,
    ...message,
  }
}

module.exports = createMessage