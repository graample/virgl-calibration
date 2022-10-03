require('dotenv').config()
const express = require('express');
const path = require('path')
const db = require('./db/index.js');

const app = express();
app.use(express.json());

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../client/public')));


app.get('/test', (req, res) => {
  res.send('Hello World!')
})

// POST route

// GET ALL route
app.get('/animals', (req, res) => {
  // res.send('test')
  const getAll = 'SELECT * FROM animals';
  db.query(getAll, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
})

// PUT route

// DELETE route

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});