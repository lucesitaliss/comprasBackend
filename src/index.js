 const express = require('express')
 const app = express()
 const cors = require('cors')
 const jwt = require('jsonwebtoken')

 const morgan = require('morgan')

// const { PORT } = require('./config.js')
 const errors = require('./utils/errors.js')
// const session = require('express-session')

// const categoriaRoutes = require('./routes/category.routes')
// const productRoutes = require('./routes/productRoutes')
// const cartRoutes = require('./routes/cartRoutes')

// const usersRouter = require('./routes/usersRouter')

// app.use(cors())
// app.use(morgan('dev'))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.use(categoriaRoutes)
// app.use(productRoutes)
// app.use(cartRoutes)
// app.use(usersRouter)

// app.use((error, req, res, next) => {
//   console.error(error)
//   if (errors[error.routine]) {
//     return res
//       .status(errors[error.routine].httpCode)
//       .json({ error: errors[error.rountine].message })
//   }
//   return res.status(500).json(error.message)
// })

 app.listen(3000)
// //server.listen(3000)
// console.log(`el puerto ${PORT} es del servidor de backend`)

//************************************** */

// const express = require('express')
// const { Pool } = require('pg')
// // const app = express()

// const pool = new Pool({
//   user: 'tvdvvqek',
//   host: 'motty.db.elephantsql.com',
//   database: 'tvdvvqek',
//   password: 'TFYW6C10nh4L5DMrfVIhXOZYLysUQBim',
//   port: 5432,
// })

// // app.get('/', (req, res) => {
// //   res.send('Hello World!');
// // });

// // app.get('/', (req, res) => {
// //   pool.query('SELECT NOW()', (err, result) => {
// //     res.send(`DB time: ${result.rows[0].now}`)
// //   })
// // })
// const port = 5000
// app.listen(port, () => {
//   console.log(`Listening on port 5000`)
// })
