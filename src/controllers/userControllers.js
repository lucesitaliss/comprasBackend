const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { capitalize } = require('../utils/strings')
const { query } = require('express')

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

const getUsers = async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users')
    res.status(200).json(users.rows)
  } catch (error) {
    res.status(500).send(error)
  }
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

const updateUser = async (req, res) => {
  const { user, id } = req.body

  if (!user || !id) {
    return res.status(404).send('There are no modification values')
  }
  try {
    const updatedUser = await pool.query(
      'UPDATE users SET user_name = $1 WHERE user_id = $2RETURNING*',
      [capitalize(user), id],
    )
    res.status(200).json(updatedUser.rows[0])
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteUserbyId = async (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.send(404).send('the user to delete is not specified')
  }

  try {
    const deletedUser = await pool.query(
      'DELETE FROM users WHERE user_id=$1 RETURNING*',
      [id],
    )
    res.status(200).json(deletedUser.rows[0])
  } catch (error) {
    res.status(500).send(error)
  }
}

const getPruebaAut = (req, res, next) => {}

module.exports = {
  getUsers,
  postUser,
  postLogin,
  updateUser,
  deleteUserbyId,
}
