const { Router } = require('express')
const router = Router()
const { verifyToken } = require('../middlewares/authJwt')

const {
  getUsers,
  postUser,
  postLogin,
  updateUser,
  deleteUserbyId,
} = require('../controllers/userControllers')

router.get('/users', verifyToken, getUsers)
router.post('/newuser', verifyToken, postUser)
router.post('/login', postLogin)
router.put('/updateuser', verifyToken, updateUser)
router.delete('/deleteuser/:id', verifyToken, deleteUserbyId)

module.exports = router
