const { Router } = require('express')
const router = Router()

const {
  postUser,
  postLogin,
  postLogout,
} = require('../controllers/userControllers')

router.post('/newuser', postUser)
router.post('/login', postLogin)
router.post('/user/lolout', postLogout)

module.exports = router
