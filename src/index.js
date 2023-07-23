const express = require("express")
const app = express()
const cors = require("cors")

const morgan = require("morgan")
const { PORT } = require("./config.js")
const errors = require("./utils/errors.js")

const categoriaRoutes = require("./routes/category.routes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const usersRouter = require("./routes/usersRouter")

const allowedOrigins = [
	"http://localhost:3000/",
	"https://lucesitaliss.github.io/shopping-list",
]
const corsErrorMessage =
	"The CORS policy for this site does not allow access from the specified Origin."

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin) return callback(null, true)
			if (allowedOrigins.indexOf(origin) === -1) {
				return callback(new Error(corsErrorMessage), false)
			}
			return callback(null, true)
		},
		credentials: false,
	})
)
app.use(morgan("dev"))
app.use(express.json())

app.use(categoriaRoutes)
app.use(productRoutes)
app.use(cartRoutes)
app.use(usersRouter)

app.use((error, req, res, next) => {
	//   console.error(error)
	//   if (errors[error.routine]) {
	//     return res
	//       .status(errors[error.routine].httpCode)
	//       .json({ error: errors[error.rountine].message })
	//   }
	//   return res.status(500).json(error.message)
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
