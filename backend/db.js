const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: 'abcd1234',
  database: 'myapp',
})
exports.pool = pool
