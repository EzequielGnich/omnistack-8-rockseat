// Importações de terceiros
const express = require('express')
const server = express()
const mongoose = require('mongoose')

const mongo = 'mongodb+srv://EzequielGnich:26eg15111990eg@cluster0-ux1ju.mongodb.net/omnistack8?retryWrites=true&w=majority'

// Minhas importações
const routes = require('./routes')

// Configuração com o banco de dados
mongoose.connect(mongo, {
  useNewUrlParser: true
})

// Configurações
const port = process.env.PORT || 3333
server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`Backend is running on port ${port}`))
