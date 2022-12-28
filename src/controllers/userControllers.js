const pool = require('../db')

const postLogin = async (req, res, next) => {
    const { user, password } = req.body
    if (user && password) {
      const userLogin = await pool.query(
        'select * from users where name_user=$1 and password=$2 RETURNING*',
        [user, password],
      )
      if (userLogin) {
        req.session.userId = user
        return res.redirect('/cart')
      }
    }
    res.redirect('/login')
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
