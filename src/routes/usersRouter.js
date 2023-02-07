const { Router } = require('express')
const router = Router()
const { verifyToken } = require('../middlewares/authJwt')

const { postUser, postLogin } = require('../controllers/userControllers')

router.post('/newuser', verifyToken, postUser)
router.post('/login', postLogin)

module.exports = router
