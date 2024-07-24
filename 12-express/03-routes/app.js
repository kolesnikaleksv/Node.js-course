const express = require('express');
const router = require('./routes');

const app = express();

// app.use('/', router);
// or
app.use(router);

app.listen(5000, () => {
  console.log('Server was launched on port 5000');
});
