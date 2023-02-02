const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { capitalize } = require('../utils/strings')

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

const postUser = async (req, res) => {
  const { name, password } = req.body

  if (!name || !password) {
    return res.status(400).send('Required user information ')
  }
  try {
    const newUser = {
      name: name,
      encryptedPassword: await encryptPassword(password),
    }
    const insertUser = await pool.query(
      'INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *',
      [capitalize(newUser.name), newUser.encryptedPassword],
    )
    return res.status(200).json(insertUser.rows[0])
  } catch (error) {
    res.status(500).send(error)
  }
}
//Autenticacion
const postLogin = async (req, res) => {
  const { name, password } = req.body

  if (!name || !password) {
    return res.status(400).send('Required user information')
  }
  try {
    const dbUser = await pool.query('SELECT * FROM users WHERE user_name= $1', [
      capitalize(name),
    ])

    if (!dbUser.rows[0]) {
      return res.status(400).send('Credenciales Incorrectas')
    }
    const dbUserPassword = dbUser.rows[0].password

    if (await bcrypt.compare(password, dbUserPassword)) {
      const token = jwt.sign(dbUser.rows[0], process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 86400,
      }) //jwt.sign({},'',{}) parametros, informacion q quiero pasar, secreto y tiempo de expiracion

      res.json(token)
    } else res.send('The username or password are not correct')
  } catch (error) {
    res.status(500).send(error)
  }
}

const getPruebaAut = (req, res, next) => {}

module.exports = {
  postUser,
  postLogin,
}
