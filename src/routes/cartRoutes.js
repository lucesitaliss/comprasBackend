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

router.get('/cart', getCart)
// router.get('/cart', verifyToken, getCart)
router.post('/cart', addCart)
router.put('/cart/', updateInvertSeleted)
router.delete('/cart/:id', deleteCartById)
router.delete('/cart', deleteAllCart)

module.exports = router
