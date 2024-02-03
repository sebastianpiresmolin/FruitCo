import express from 'express';
import renderPage from './src/renderPage.js';
import getAll from './src/getAll.js';
import getAllById from './src/getAllById.js';
import getBoxesIncludingFruit from './src/getBoxesIncludingFruit.js';


const app = express();




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

app.get('/addFruitBox', async (request, response) => {});

app.use(express.static('static'));

export default app;
