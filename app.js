import express from 'express';


const app = express();

app.get('/getAll', async (request, response) => {
  getAll(response, 'getAll');
});

app.get('/getAllById/:id', async (request, response) => {
  const id = request.params.id;
  renderPage(response, 'getAllById');
});

app.get('/addFruitBox', async (request, response) => {});

app.get('/getBoxesIncludingFruit/:fruit', async (request, response) => {
  const fruit = request.params.fruit;
});

app.use(express.static('static'));

app.listen(8001);
