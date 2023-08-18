const express = require('express')
const app = express()
const cors = require('cors')

const morgan = require('morgan')
const { PORT } = require('./config.js')
const errors = require('./utils/errors.js')

const categoriaRoutes = require('./routes/category.routes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const usersRouter = require('./routes/usersRouter')
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(categoriaRoutes)
app.use(productRoutes)
app.use(cartRoutes)
app.use(usersRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
