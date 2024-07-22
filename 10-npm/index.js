const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello from our express');
});

app.listen(3000);
