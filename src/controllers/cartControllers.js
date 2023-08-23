const pool = require('../db')
const { validationsProducts } = require('../schemas/products')

const getCart = async (req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT 
      categories.category_id, 
      categories.category_name, 
      products.product_name,
      products.product_id,
      products.category_id,
      cart.product_id,
      cart.selected,
      cart.cart_id
      FROM categories
      JOIN products ON categories.category_id = products.category_id
      JOIN cart ON cart.product_id = products.product_id
      ORDER BY products.product_id;`)

    const productByCategory = {}
    const productsByCategorys = []

    result.rows.forEach((product) => {
      if (!productByCategory[product.category_name]) {
        productByCategory[product.category_name] = [product]
        return productByCategory
      }

      productByCategory[product.category_name].push(product)

      return productByCategory
    })
    productsByCategorys.push(productByCategory)

    res.status(200).json(productByCategory)
  } catch (error) {
    return next(error)
  }
}

const addCart = async (req, res, next) => {
  const products = validationsProducts(req.body)

  if (products.error) {
    return res.status(400).json({ error: JSON.parse(products.error.message) })
  }

  const insertionPromises = products.data.map((product) =>
    pool.query(
      'INSERT INTO cart (product_id) SELECT $1 WHERE NOT EXISTS (SELECT product_id from cart where product_id= $1) RETURNING*',
      [product.product_id],
    ),
  )
  const insertedItems = await Promise.all(insertionPromises)
  const insertedRows = insertedItems.map((result) => result.rows[0])

  res.status(200).json({ message: 'Items added to cart', insertedRows })
}

const updateInvertSeleted = async (req, res, next) => {
  const { id, selected } = req.body

  try {
    const result = await pool.query(
      'UPDATE cart SET selected=$1 where cart_id=$2 RETURNING*',
      [!selected, id],
    )
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const deleteCartById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      'DELETE FROM cart WHERE cart_id = $1 RETURNING*',
      [id],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteAllCart = async (req, res, next) => {
  try {
    const result = await pool.query('truncate cart')
    res.send('La Tabla Cart ha sido vaciada')
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getCart,
  addCart,
  updateInvertSeleted,
  deleteCartById,
  deleteAllCart,
}
