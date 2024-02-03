import fruitBoxes from '../fake-api.js';

function getBoxesIncludingFruit(response, fruit) {
  const data = {
    boxes: fruitBoxes
      .filter((box) => box.Articles.includes(fruit))
      .map((box) => {
        return {
          id: box.Id,
          name: box.Name,
          fruit: box.Articles,
        };
      }),
  };
  response.send(data);
}

export default getBoxesIncludingFruit;
