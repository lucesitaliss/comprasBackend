const zod = require('zod')

const productsAddCart = zod.array(
  zod.object({
    product_id: zod.number().int().positive(),
    product_name: zod.string(),
    category_id: zod.number().int().positive(),
    state_id: zod.number(1),
    checked: zod.boolean(true),
  }),
)
const validationsProductsAddCart = (products) => {
  return productsAddCart.safeParse(products)
}

const productUpdateInvertSeleted = zod.object({
  id: zod.number().int().positive(),
  selected: zod.boolean(),
})

const validationsProductUpdateInvertSeleted = (product) => {
  return productUpdateInvertSeleted.safeParse(product)
}

module.exports = {
  validationsProductsAddCart,
  validationsProductUpdateInvertSeleted,
}
