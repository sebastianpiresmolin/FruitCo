import express from 'express';
import getAll from './src/getAll.js';
import getAllById from './src/getAllById.js';
import { join } from 'path';

const app = express();


function renderPage(response, page) {
  response.sendFile(join(process.cwd(), `${page}.html`));
}

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

app.get('/addFruitBox', async (request, response) => {});

app.get('/getBoxesIncludingFruit/:fruit', async (request, response) => {
  const fruit = request.params.fruit;
});

app.use(express.static('static'));

export default app;
