// Declare an array to store the filtered boxes
let filteredBoxes = [];

// Define an asynchronous function to handle the search
async function handleSearch() {
  // Get the search value from the input field
  let searchValue = document.getElementById('searchInput').value;

  // Get the result list element
  let resultList = document.getElementById('resultList');
  // Remove all child nodes of the result list to clear previous results
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }

  // Check if the search value is a number or a string
  if (isNaN(searchValue)) {
    // If it's a string, fetch boxes that include this fruit
    const response = await fetch(`/getBoxesIncludingFruit/${searchValue}`);
    filteredBoxes = await response.json();
  } else {
    // If it's a number, fetch boxes by this ID
    const response = await fetch(`/getAllById/${searchValue}`);
    filteredBoxes = await response.json();
  }

  // Check if filteredBoxes.boxes is an array and has elements
  if (Array.isArray(filteredBoxes.boxes) && filteredBoxes.boxes.length > 0) {
    // If it does, create and append a list item for each box
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
    // If it doesn't, create and append a list item with the text 'No result'
    let li = document.createElement('li');
    li.textContent = 'No result';
    document.getElementById('resultList').appendChild(li);
  }

  // Return the filtered boxes
  return filteredBoxes;
}

// Add an event listener for the DOMContentLoaded event
// When the DOM is fully loaded, add a click event listener to the search button
// When the search button is clicked, call the handleSearch function
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
