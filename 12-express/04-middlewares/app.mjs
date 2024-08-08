import express from 'express';
import morgan from 'morgan';

const port = 5000;
const app = express();

// logs info about requests
app.use(morgan('tiny'));
// Convert JSON to JS Object in PUT, PATCH, POST requests
app.use(express.json());
// Convert data from 'form' to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  console.log(req.body);
  res.send(`This is express server.`);
});

app.listen(port, () => console.log(`Server was launched on port ${port}`));
