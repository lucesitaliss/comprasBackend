const { Router } = require('express')
const router = Router()

const { postLogin, postLogout } = require('../controllers/userControllers')

router.post('/login', postLogin)
router.post('/user/lolout', postLogout)

module.exports = router
