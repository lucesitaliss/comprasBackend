const zod = require('zod')

const insertCategory = zod.object({
  category: zod.string(),
})
const validationsInsertategory = (category) => {
  return insertCategory.safeParse(category)
}

const updateCategory = zod.object({
  id: zod.number().int().positive(),
  category: zod.string(),
})
const validationUpdateCategory = (category) => {
  return updateCategory.safeParse(category)
}

module.exports = { validationsInsertategory, validationUpdateCategory }
