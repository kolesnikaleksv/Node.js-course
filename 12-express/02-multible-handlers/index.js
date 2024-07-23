const express = require('express');

const app = express();

const firstHandler = (req, res, next) => {
  console.log('First handler');
  next(); // only third parametr can launch next function
};

const secondHandler = (req, res) => {
  console.log('Second handler');
  res.send('Hello word and express');
};

app.get('/', firstHandler, secondHandler);

app.listen(5000, () => {
  console.log('Server was launched on port 5000');
});
