const { config } = require('dotenv')
config()

// module.exports = {
//   db: {
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
//   },
// }

// module.exports = {
//   PORT: process.env.PORT || 4001,
//   db: {
//     user: process.env.DB_USER || 'postgres',
//     password: process.env.DB_PASSWORD || '2020',
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || '5432',
//     database: process.env.DB_DATABASE || 'cart',
//   },
// }

// postgres:Od4ya334jz6Ewka5cCpt@containers-us-west-153.railway.app:6481/railway

module.exports = {
  PORT: process.env.PORT || 4001,
  db: {
    user: 'postgres',
    password: 'Od4ya334jz6Ewka5cCpt' || '2020',
    host: 'containers-us-west-153.railway.app' || 'localhost',
    port: '6481' || '5432',
    database: 'railway' || 'cart',
  },
}
