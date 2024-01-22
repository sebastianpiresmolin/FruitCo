import express from 'express';
import { engine } from 'express-handlebars';
import handebars from 'handlebars';
import fs from 'fs/promises';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

let fruitBoxes = [
  {
    Id: 1,
    Name: 'Anna',
    Articles: ['Mango', 'Banana', 'Melon', 'Grapes'],
  },
  {
    Id: 2,
    Name: 'Janne',
    Articles: ['Banana', 'Peach', 'Pineapple', 'Apple', 'Grapes'],
  },
  {
    Id: 3,
    Name: 'David',
    Articles: ['Orange', 'Banana', 'Grapefruit', 'Coconut', 'Mango'],
  },
  {
    Id: 4,
    Name: 'Louise',
    Articles: ['Strawberry', 'Peach', 'Papaya', 'Raspberry', 'Cherry'],
  },
  {
    Id: 5,
    Name: 'Emma',
    Articles: ['Plum', 'Cherry', 'Apple', 'Orange', 'Pineapple', 'Mandarine'],
  },
  {
    Id: 6,
    Name: 'Torsten',
    Articles: ['Papaya', 'Cherry', 'Peach', 'Grapes'],
  },
  {
    Id: 7,
    Name: 'Charlotte',
    Articles: ['Cranberry', 'Banana', 'Mango', 'Peach', 'Pear', 'Apple'],
  },
];

async function renderPage(response, page) {
  const mappedFruitBoxes = fruitBoxes.map((item) => {
    return {
      id: item.Id,
      name: item.Name,
      articles: item.Articles,
    };
  });

  response.render(page, {
    fruitBox: mappedFruitBoxes,
  });
}

app.get('/', async (request, response) => {
  renderPage(response, 'index');
});

app.get('/getAll', async (request, response) => {
  renderPage(response, 'getAll');
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
