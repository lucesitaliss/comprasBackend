const zod = require('zod')

const productByCategory = zod.object({
  product: zod.string(),
  category: zod.number().int().positive(),
})
const validationProductByCategory = (product) => {
  return productByCategory.safeParse(product)
}

const updateProduct = zod.object({
  id: zod.number().int().positive(),
  product: zod.string(),
})
const validationUpdateProduct = (product) => {
  return updateProduct.safeParse(product)
}

const productUpdateChangeChecked = zod.object({
  checkedValue: zod.boolean(),
  productId: zod.string(),
})
const validationsproductUpdateChangeChecked = (product) => {
  return productUpdateChangeChecked.safeParse(product)
}

const updateDeleteProduct = zod.object({
  id: zod.number().int().positive(),
})
const validationupdateDeleteProduct = (product) => {
  return updateDeleteProduct.safeParse(product)
}

module.exports = {
  validationProductByCategory,
  validationUpdateProduct,
  validationsproductUpdateChangeChecked,
  validationupdateDeleteProduct,
}
