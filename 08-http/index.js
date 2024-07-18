const http = require('http');
const {
  getComments,
  getHtml,
  handleNotFound,
  getText,
  postComment,
  getHome,
} = require('./handlers');

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return getHome(req, res);
  }
  if (req.url === '/html') {
    return getHtml(req, res);
  }
  if (req.url === '/text') {
    return getText(req, res);
  }
  if (req.method === 'GET' && req.url === '/comments') {
    return getComments(req, res);
  }
  if (req.method === 'POST' && req.url === '/comments') {
    return postComment(req, res);
  }

  handleNotFound(req, res);
});

server.listen(port, () => {
  console.log(`Server was launched on port: ${port}!`);
});

//                       Code before refactoring

// const http = require('http');

// const port = 5000;

// const comments = [
//   { id: 100, text: 'First comment', author: 'Olersandr' },
//   { id: 200, text: 'Second comment', author: 'Kyrylo' },
//   { id: 300, text: 'Third comment', author: 'Liubov' },
// ];

// const server = http.createServer((req, res) => {
//   console.log(req.method);
//   if (req.url === '/html') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     // return res.end('<h1>Greetings from the http server!</h1>');
//     //or
//     res.write('<html><body><div>');
//     res.write('<h1>Greetings from the http server!</h1>');
//     res.write('</div></body></html>');
//     return res.end();
//   }
//   if (req.url === '/text') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     return res.end('Greetings from the text page!');
//   }
//   if (req.method === 'GET' && req.url === '/comments') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     return res.end(JSON.stringify(comments));
//   }
//   res.statusCode = 404;
//   res.setHeader('Content-Type', 'text/html');
//   return res.end('<h1>Page not found</h1>');
// });

// server.listen(port, () => {
//   console.log(`Server was launched on port: ${port}!`);
// });
