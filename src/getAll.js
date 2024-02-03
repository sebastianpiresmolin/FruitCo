import fruitBoxes from '../fake-api';

const allBoxes = {
  boxes: fruitBoxes.map((box) => {
    return {
      id: box.Id,
      name: box.Name,
      fruit: box.Articles,
    };
  }),
};
