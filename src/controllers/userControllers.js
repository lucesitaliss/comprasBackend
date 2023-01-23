const pool = require('../db')

const postLogin = async (req, res, next) => {
  const { name, password } = req.body
  if (name && password) {
    const userLogin = await pool.query(
      'select * from users where name_user=$1 and password = $2',
      [name, password],
    )

    if (userLogin.rows[0]) {
      req.session.loggedIn = true
      req.session.userName = name

      // res.send('Inicio de sesion exitoso')
      res.redirect('/cart')
    } else {
      res.status(400).send('Credenciales Incorrectas')
    }
  }
}

const postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/home')
    }
    res.clearCookie('sid')
    res.redirect('/')
  })
}

module.exports = {
  postLogin,
  postLogout,
}
