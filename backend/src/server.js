// Importações de terceiros
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const server = express()

// Variaveis
const port = process.env.PORT || 3333
const mongo = 'mongodb+srv://EzequielGnich:26eg15111990eg@cluster0-ux1ju.mongodb.net/omnistack8?retryWrites=true&w=majority'

// Minhas importações
const routes = require('./routes')

// Configurações
server.use(cors())
mongoose.connect(mongo, {
  useNewUrlParser: true
})
server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`Backend is running on port ${port}`))
