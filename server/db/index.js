require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  database: process.env.POOL_DB,
  password: process.env.POOL_PASSWORD,
  user: process.env.POOL_USER,
  host: process.env.POOL_HOST,
  port: process.env.POOL_PORT
});
pool.on('error', err => {
  console.log('error connecting to pool', err);
});

pool.connect(console.log('pool connected!'));

module.exports = {
  query: (text, params) => pool.query(text, params),
};