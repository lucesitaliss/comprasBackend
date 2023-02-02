const { Router } = require('express')
const router = Router()

const {
  postUser,
  postLogin,
  
} = require('../controllers/userControllers')

router.post('/newuser', postUser)
router.post('/login', postLogin)

module.exports = router
