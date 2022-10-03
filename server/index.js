require('dotenv').config()
const express = require('express');
const path = require('path')

const app = express();

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../client/public')));


app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});