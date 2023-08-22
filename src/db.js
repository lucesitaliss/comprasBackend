const { Pool } = require('pg')
const { db } = require('./config')

const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
  max: 5, // Número máximo de conexiones en el pool
  idleTimeoutMillis: 30000, // Tiempo máximo de inactividad antes de cerrar la conexión
  connectionTimeoutMillis: 2000, // Tiempo máximo para establecer una nueva conexión
})

module.exports = pool
