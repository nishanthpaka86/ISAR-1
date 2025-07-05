
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,     // not 'localhost'
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool with promise support
const db = pool.promise();

module.exports = db;
