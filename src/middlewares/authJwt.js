// middlewares de autorizacion
const jwt = require('jsonwebtoken')
const pool = require('../db')
console.log(jwt)

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-acces-token']
    if (!token) {
      return res.status(403).send('No token provided')
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const dbUser = await pool.query('SELECT * FROM users WHERE password= $1', [
      decoded.password,
    ])
    if (!dbUser) return res.status(404).send('No user found')

    next()
  } catch (error) {
    return res.status(401).send('Authentication failed')
  }
}

module.exports = {
  verifyToken,
}
