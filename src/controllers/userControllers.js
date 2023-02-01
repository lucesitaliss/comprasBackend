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
//Autenticacion y Autorizacion
const postLogin = async (req, res) => {
  const { name, password } = req.body

  if (!name || !password) {
    return res.status(400).send('Required user information')
  }
  try {
    //Autenticacion
    const dbUser = await pool.query(
      'SELECT password FROM users WHERE user_name= $1',
      [name],
    )

    if (!dbUser.rows[0]) {
      return res.status(400).send('Credenciales Incorrectas')
    }
    const dbUserPassword = dbUser.rows[0].password
    if (await bcrypt.compare(password, dbUserPassword)) {
      //Autorizacion con Token
      const token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 86400,
      }) //jwt.sign({},'',{}) parametros, informacion q quiero pasar, secreto y tiempo de expiracion
      res.send(token)
    } else res.send('The username or password are not correct')
  } catch (error) {
    res.status(500).send(error)
  }
}

//middlework de authentication de token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] //Si hay un encabezado obtener el token
  if (token == null) return res.sendStatus(401)
  //Verificar que el Token sea valido
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
const getPruebaAut = (req, res, next) =>{
  
}

module.exports = {
  postUser,
  postLogin,
}
