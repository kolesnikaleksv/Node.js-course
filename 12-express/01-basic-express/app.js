// const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Response from Express'));

app.listen(5000, () => console.log('Server was launched on server 5000'));
