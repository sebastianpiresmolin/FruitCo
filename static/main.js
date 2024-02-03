// Search by id or fruit name function
let filteredBoxes = [];

async function handleSearch() {
  let searchValue = document.getElementById('searchInput').value;

  // Clear previous results
  document.getElementById('resultList').innerHTML = '';

  if (isNaN(searchValue)) {
    const response = await fetch(`/getBoxesIncludingFruit/${searchValue}`);
    filteredBoxes = await response.json();
  } else {
    const response = await fetch(`/getAllById/${searchValue}`);
    filteredBoxes = await response.json();
  }

  // Check if filteredBoxes.boxes is an array and has elements
  if (Array.isArray(filteredBoxes.boxes) && filteredBoxes.boxes.length > 0) {
    for (let i = 0; i < filteredBoxes.boxes.length; i++) {
      let li = document.createElement('li');

      let id = document.createElement('h2');
      id.classList.add('customerId');
      id.textContent = `ID: ${filteredBoxes.boxes[i].id}`;

      let name = document.createElement('h3');
      name.classList.add('customerName');
      name.textContent = `Customer: ${filteredBoxes.boxes[i].name}`;

      let fruit = document.createElement('p');
      fruit.classList.add('customerFruit');
      fruit.textContent = `Articles: ${filteredBoxes.boxes[i].fruit}`;

      li.appendChild(id);
      li.appendChild(name);
      li.appendChild(fruit);
      li.classList.add('order');

      document.getElementById('resultList').appendChild(li);
    }
  } else {
    let li = document.createElement('li');
    li.textContent = 'No result';
    document.getElementById('resultList').appendChild(li);
  }

  return filteredBoxes;
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('searchButton')
    .addEventListener('click', handleSearch);
});

// Display all fruit boxes function
let allBoxes = [];

async function handleGetAll() {
  const response = await fetch('/getAll');
  allBoxes = await response.json();

  for (let i = 0; i < allBoxes.boxes.length; i++) {
    let li = document.createElement('li');

    let id = document.createElement('h2');
    id.classList.add('customerId');
    id.textContent = `ID: ${allBoxes.boxes[i].id}`;

    let name = document.createElement('h3');
    name.classList.add('customerName');
    name.textContent = `Customer: ${allBoxes.boxes[i].name}`;

    let fruit = document.createElement('p');
    fruit.classList.add('customerFruit');
    fruit.textContent = `Articles: ${allBoxes.boxes[i].fruit}`;

    li.appendChild(id);
    li.appendChild(name);
    li.appendChild(fruit);
    li.classList.add('order');

    document.getElementById('resultList').appendChild(li);
  }

  return allBoxes;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('showAll').addEventListener('click', handleGetAll);
});
