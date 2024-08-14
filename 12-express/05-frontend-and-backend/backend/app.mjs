import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const port = 5000;
const app = express();

// logs info about requests
app.use(morgan('tiny'));
// Convert JSON to JS Object in PUT, PATCH, POST requests
app.use(express.json());
// Convert data from 'form' to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));
// enable all CORS request
app.use(cors());

app.use((req, res) => {
  const person = {
    name: 'Oleksandr',
    age: 25,
    isHandsom: true,
  };

  return res.json(person);
});

app.listen(port, () => console.log(`Server was launched on port ${port}`));
