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

//postgres:gWUMwA3fPFgwD0Xnxh7K@containers-us-west-93.railway.app:7524/railway

postgresql: module.exports = {
  PORT: process.env.PORT || 4001,
  db: {
    user: 'postgres',
    password: 'gWUMwA3fPFgwD0Xnxh7K' || '2020',
    host: 'containers-us-west-93.railway.app' || 'localhost',
    port: '7524' || '5432',
    database: 'railway' || 'cart',
  },
}
