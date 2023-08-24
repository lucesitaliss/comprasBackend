const pool = require('../db')
const { capitalize } = require('../utils/strings')
const {
  validationProductByCategory,
  validationUpdateProduct,
  validationsproductUpdateChangeChecked,
} = require('../schemas/productsSchema')

const getProducts = async (req, res, next) => {
  try {
    const result = await pool.query(
      'SELECT * FROM products WHERE state_id=1  ORDER BY product_name',
    )
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const getProductById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      'SELECT * FROM products WHERE product_id = $1',
      [id],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const getProductsByCategory = async (req, res, next) => {
  const { category_id } = req.params
  try {
    const result = await pool.query(
      `
    SELECT * 
    FROM products
    JOIN categories ON categories.category_id = products.category_id
    where categories.category_id = $1 and products.state_id=1 
    ORDER BY product_name
    `,
      [category_id],
    )
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const insertProduct = async (req, res, next) => {
  const productCategory = validationProductByCategory(req.body)
  const { product, category } = productCategory.data

  if (productCategory.error) {
    return res
      .status(400)
      .json({ error: JSON.parse(productCategory.error.message) })
  }

  const result = await pool.query(
    'INSERT INTO products(product_name, category_id, state_id) VALUES ($1, $2, 1) RETURNING*',
    [capitalize(product), category],
  )

  res.status(200).json(result.rows[0])
}

const updateProduct = async (req, res, next) => {
  const updateProduct = validationUpdateProduct(req.body)
  const { product, id } = updateProduct.data

  if (updateProduct.error) {
    return res
      .status(400)
      .json({ error: JSON.parse(updateProduct.error.message) })
  }
  const result = await pool.query(
    'UPDATE products SET product_name = $1 WHERE product_id = $2 RETURNING*',
    [capitalize(product), id],
  )

  res.status(200).json(result.rows[0])
}

const getCheckedById = async (req, res, next) => {
  try {
    const { idProduct } = req.params
    const result = await pool.query(
      'SELECT checked from products where product_id = $1 ',
      [idProduct],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateChangeChecked = async (req, res, next) => {
  // const { checkedValue, productId } = req.body
  const productUpdateChecked = validationsproductUpdateChangeChecked(req.body)
  const { checkedValue, productId } = productUpdateChecked.data

  if (productUpdateChecked.error) {
    return res
      .status(400)
      .json({ error: JSON.parse(productUpdateChecked.error.message) })
  }

  const result = await pool.query(
    'UPDATE products SET checked=$1 where product_id=$2 RETURNING*',
    [checkedValue, productId],
  )

  res.status(200).json(result.rows)
}

const updateResetCheckedById = async (req, res, next) => {
  const { id } = req.params

  const result = pool.query(
    'UPDATE products SET checked=false where product_id =$1 RETURNING*',
    [id],
  )
  res.json((await result).rows[0])
}

const updateResetChecked = async (req, res, next) => {
  try {
    const result = await pool.query('UPDATE products SET checked= false')
    console.log(result)
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const updateDeleteProduct = async (req, res, next) => {
  const { id } = req.body
  try {
    const result = await pool.query(
      'UPDATE products SET state_id =2 WHERE product_id = $1 RETURNING*',
      [id],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      'DELETE FROM products WHERE product_id = $1 RETURNING*',
      [id],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProducts,
  insertProduct,
  getProductById,
  updateProduct,
  getCheckedById,
  updateChangeChecked,
  updateResetCheckedById,
  updateResetChecked,
  updateDeleteProduct,
  deleteProduct,
  getProductsByCategory,
}
