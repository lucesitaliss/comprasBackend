const z = require('zod')

const productsAddCart = z.array(
  z.object({
    product_id: z.number().int().positive(),
    product_name: z.string(),
    category_id: z.number().int().positive(),
    state_id: z.number(1),
    checked: z.boolean(true),
  }),
)
const validationsProductsAddCart = (products) => {
  return productsAddCart.safeParse(products)
}

const productUpdateInvertSeleted = z.object({
  id: z.number().int().positive(),
  selected: z.boolean(),
})

const validationsProductUpdateInvertSeleted = (product) => {
  return productUpdateInvertSeleted.safeParse(product)
}

const productCart = z.object({
  id: z.number().int().positive(),
})

const validationsProductCart = (product) => {
  return productCart.safeParse(product)
}

module.exports = {
  validationsProductsAddCart,
  validationsProductUpdateInvertSeleted,
  validationsProductCart,
}
