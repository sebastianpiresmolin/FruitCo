import fruitBoxes from '../fake-api.js';

function getAllById(response, id) {
  const data = {
    boxes: fruitBoxes
      .filter((box) => box.Id === Number(id))
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

export default getAllById;
