const pool = require('../db')
const { capitalize } = require('../utils/strings')
const {
  validationsInsertategory,
  validationUpdateCategory,
} = require('../schemas/categoriesShema')

const getCategories = async (req, res, next) => {
  try {
    const result = await pool.query(
      'SELECT* FROM categories WHERE state_id = 1 ORDER BY category_name',
    )
    res.status(200).json(result.rows)
  } catch (error) {
    return next(error)
  }
}

const getCategoryById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      `SELECT* FROM categories WHERE category_id = $1`,
      [id],
    )
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'The specified category id does not exist',
      })
    }
    res.status(200).json(result.rows[0])
  } catch (error) {
    return next(error)
  }
}

const insertCategory = async (req, res, next) => {
  const newCategory = validationsInsertategory(req.body)
  const { category } = newCategory.data

  if (newCategory.error) {
    return res
      .status(400)
      .json({ error: JSON.parse(newCategory.error.message) })
  }

  try {
    const result = await pool.query(
      'INSERT INTO categories (category_name, state_id) VALUES ($1, $2) RETURNING *',
      [capitalize(category), 1],
    )

    res.status(200).json(result.rows[0])
  } catch (error) {
    return next(error)
  }
}

const updateCategory = async (req, res, next) => {
  const editCategory = validationUpdateCategory(req.body)
  const { id, category } = editCategory.data

  if (editCategory.error) {
    return res
      .status(400)
      .json({ error: JSON.parse(editCategory.error.message) })
  }
  try {
    const result = await pool.query(
      'UPDATE categories SET category_name = $1 WHERE category_id = $2 RETURNING *',
      [capitalize(category), id],
    )
    res.status(200).json(result.rows[0])
  } catch (error) {
    return next(error)
  }
}

const updateDeleteCategory = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      'UPDATE categories SET state_id= 2 WHERE category_id= $1 RETURNING*',
      [id],
    )
    console.log(result)
    res.json(result.rows[0])
  } catch (error) {
    return next(error)
  }
}

const deleteCategory = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      `DELETE FROM categories WHERE category_id = $1 RETURNING *`,
      [id],
    )
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'El id de categoría especificado no existe',
      })
    }
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getCategories,
  getCategoryById,
  insertCategory,
  updateCategory,
  deleteCategory,
  updateDeleteCategory,
}
