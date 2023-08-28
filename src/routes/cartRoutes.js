const { Router } = require('express')
const router = Router()
const {
  getCart,
  addCart,
  updateInvertSeleted,
  deleteCartById,
  deleteSelectedCarts,
  deleteAllCart,
} = require('../controllers/cartControllers')
const { verifyToken } = require('../middlewares/authJwt')

router.get('/cart', verifyToken, getCart)
router.post('/cart', verifyToken, addCart)
router.put('/cart/', verifyToken, updateInvertSeleted)
router.delete('/cart/:id', verifyToken, deleteCartById)
router.delete('/delete-cart-selected', verifyToken, deleteSelectedCarts)
router.delete('/cart', verifyToken, deleteAllCart)

module.exports = router
