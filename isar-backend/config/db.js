
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ISAR', // replace with your actual MySQL password
  database: 'isar_db', // replace with your actual DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool with promise support
const db = pool.promise();

module.exports = db;