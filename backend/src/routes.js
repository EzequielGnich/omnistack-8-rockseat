const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'World' })
})

routes.post('/devs', (req, res) => {
  return res.send(req.body)
})

module.exports = routes
