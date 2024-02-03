import fruitBoxes from '../fake-api.js';

function getAll(response, page) {
  const data = {
    boxes: fruitBoxes.map((box) => {
      return {
        id: box.Id,
        name: box.Name,
        fruit: box.Articles,
      };
    }),
  };
  response.send(data);
}

export default getAll;
