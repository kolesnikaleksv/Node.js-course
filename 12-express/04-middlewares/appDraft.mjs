import express from 'express';
import morgan from 'morgan';
// import qs from 'querystring';

const port = 5000;
const app = express();

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

// app.use(logger);
// app.use((req, res) => res.send('This is express server'));
// or
// app.use(logger, (req, res) => res.send('This is express server'));
// and it can be like this
// app.get('/', logger, anotherFN, (req, res) => {res.send(...smt)})

// app.use(morgan('combined'));
app.use(morgan('tiny'));

// app.use((req, res, next) => {
//   let data = '';
//   req.on('data', (chunk) => (data += chunk));
//   req.on('end', () => console.log(JSON.parse(data)));

//   next();
// });

// app.use((req, res, next) => {
//   let data = '';
//   req.on('data', (chunk) => (data += chunk));
//   req.on('end', () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;
//     next();
//   });
// });
// // instead of this complicated function we can use express midlewear function
app.use(express.json());

// app.use((req, res) => res.send('This is express server'));

// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//     let data = '';
//     req.on('data', (chunk) => (data += chunk));
//     req.on('end', () => {
//       const parsedFromData = qs.parse(data);
//       req.body = parsedFromData;
//       next();
//     });
//   } else {
//     next();
//   }
// });
// // instead of it we can use express way to handle data from forms
app.use(express.urlencoded({ extended: true })); // {extended: true} because we can use anothe qs. not internal querystring module
app.use((req, res) => {
  console.log(req.body);
  res.send(`This is express server.`);
});

app.listen(port, () => console.log(`Server was launched on port ${port}`));
