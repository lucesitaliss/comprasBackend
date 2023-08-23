const z = require('zod')

const productsSchema = z.array(
  z.object({
    product_id: z.number().int().positive(),
    product_name: z.string(),
    category_id: z.number().int().positive(),
    state_id: z.number(1),
    checked: z.boolean(true),
  }),
)
const validationsProducts = (products) => {
  return productsSchema.safeParse(products)
}

module.exports = {
  validationsProducts,
}
