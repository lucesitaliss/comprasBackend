const { Router } = require('express')
const router = Router()
const {
  getCart,
  addCart,
  updateInvertSeleted,
  deleteCartById,
  deleteAllCart,
} = require('../controllers/cartControllers')
const { verifyToken } = require('../middlewares/authJwt')

//router.get('/cart', getCart)
router.get('/cart', verifyToken, getCart)
router.post('/cart', verifyToken, addCart)
router.put('/cart/',verifyToken,  updateInvertSeleted)
router.delete('/cart/:id', verifyToken,  deleteCartById)
router.delete('/cart',verifyToken, deleteAllCart)

module.exports = router
