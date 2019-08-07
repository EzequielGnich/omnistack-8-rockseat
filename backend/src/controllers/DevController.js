const axios = require('axios')

const Dev = require('../models/Dev')

module.exports = {
  // Faz a busca de todos os Devs
  async index (req, res) {
    const { user } = req.headers

    const loggedDev = await Dev.findById(user)

    const users = await Dev.find({
      $and: [
        // $ne = não é igual ao user
        { _id: { $ne: user } },
        // $nin = não está incluso (array)
        { _id: { $nin: loggedDev.likes } },
        // $nin = não está incluso (array)
        { _id: { $nin: loggedDev.dislikes } }
      ]
    })
    return res.json(users)
  },

  async store (req, res) {
    const { username } = req.body

    // Faz a busca no banco para ver se existe um usuario já cadastrado
    const userExists = await Dev.findOne({ user: username })
    // Se userExists retornar true ele retorna o usuário para o frontend
    if (userExists) return res.json(userExists)

    const response = await axios.get(`https://api.github.com/users/${username}`)

    const { name, bio, avatar_url: avatar } = response.data

    const nameUser = name === null ? username : name

    const dev = await Dev.create({
      name: nameUser,
      user: username,
      bio,
      avatar
    })

    return res.json(dev)
  }
}
