const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')

//Configuración del socket
const { Server } = require('socket.io')
const http = require('http')
const server = http.createServer(app)
// const io = new Server(server, {
//   cors: {
//     origin: '*',
//   },
// })

const morgan = require('morgan')

const { PORT } = require('./config.js')
const errors = require('./utils/errors.js')
const session = require('express-session')

const categoriaRoutes = require('./routes/category.routes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const historyCartRoutes = require('./routes/historyCartRoutes')

const usersRouter = require('./routes/usersRouter')

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(
//   session({
//     name: 'sid',
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 2, // 2 horas la duración de la cookie
//     },
//   }),
// )

app.use(categoriaRoutes)
app.use(productRoutes)
app.use(cartRoutes)
app.use(historyCartRoutes)
app.use(usersRouter)

// io.on('connection', (socket) => {
//   const isLoggedIn = req.session.loggedIn
//   socket.emit('isLoggedIn', isLoggedIn)

// })

// io.on('connection', (socket) => {
//   console.log('socket connet', socket.id)
// })

app.use((error, req, res, next) => {
  console.error(error)
  if (errors[error.routine]) {
    return res
      .status(errors[error.routine].httpCode)
      .json({ error: errors[error.rountine].message })
  }
  return res.status(500).json(error.message)
})

// app.listen(PORT)
server.listen(PORT)
console.log(`el puerto ${PORT} es del servidor de backend`)
