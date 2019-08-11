// Importações de terceiros
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', socket => {
  const { user } = socket.handshake.query

  connectedUsers[user] = socket.id
})

// Variaveis
const port = process.env.PORT || 3333
const mongo = 'mongodb+srv://EzequielGnich:26eg15111990eg@cluster0-ux1ju.mongodb.net/omnistack8?retryWrites=true&w=majority'

// Minhas importações
const routes = require('./routes')

// Configurações
app.use((req, res, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
})

app.use(cors())
mongoose.connect(mongo, {
  useNewUrlParser: true
})
app.use(express.json())
app.use(routes)

server.listen(port, () => console.log(`Backend is running on port ${port}`))
