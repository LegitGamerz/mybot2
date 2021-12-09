const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("The server is ready!")
}) 

function keepAlive() {
  server.listen(3000, () => {
    console.log("Bot Online")
  })
}

module.exports = keepAlive();