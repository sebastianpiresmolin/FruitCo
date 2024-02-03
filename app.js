import express from 'express';
import bodyParser from 'body-parser';
import renderPage from './src/renderPage.js';
import getAll from './src/getAll.js';
import getAllById from './src/getAllById.js';
import getBoxesIncludingFruit from './src/getBoxesIncludingFruit.js';
import fruitBoxes from './fake-api.js';

const app = express();

app.use(bodyParser.json());

app.get('/', async (request, response) => {
  renderPage(response, 'index');
});

app.get('/getAll', async (request, response) => {
  getAll(response, 'getAll');
});

app.get('/getAllById/:id', async (request, response) => {
  const id = request.params.id;
  getAllById(response, id);
});

app.get('/getBoxesIncludingFruit/:fruit', async (request, response) => {
  const fruit = request.params.fruit;
  getBoxesIncludingFruit(response, fruit);
});

app.post('/addFruitBox', async (request, response) => {
  const newBox = request.body;
  fruitBoxes.push(newBox);
  response.json({ success: true, message: 'Fruit box added' });
});

app.use(express.static('static'));

export default app;
