const { Router } = require('express')
const router = Router()
const {
  getProducts,
  insertProduct,
  getProductById,
  getCheckedById,
  updateChangeChecked,
  updateProduct,
  updateCheckedSelectCart,
  updateResetCheckedById,
  updateResetChecked,
  updateDeleteProduct,
  deleteProduct,
  getProductsByCategory,
} = require('../controllers/productsControlers')
const { verifyToken } = require('../middlewares/authJwt')

router.get('/products', verifyToken, getProducts)
router.get('/product/:id', getProductById)
router.get(
  '/products/category/:category_id',
  verifyToken,
  getProductsByCategory,
)
router.post('/product', verifyToken, insertProduct)
router.put('/product', verifyToken, updateProduct)
router.get('/product/checked/id/:idProduct', verifyToken, getCheckedById)
router.put('/product/checked', verifyToken, updateChangeChecked)
router.put('/product/checked-select-cart', verifyToken, updateCheckedSelectCart)
router.put('/product/checked/reset/id/:id', verifyToken, updateResetCheckedById)
router.put('/products/checked/reset', verifyToken, updateResetChecked)
router.put('/product/delete', verifyToken, updateDeleteProduct)
router.delete('/product/:id', verifyToken, deleteProduct)

module.exports = router
