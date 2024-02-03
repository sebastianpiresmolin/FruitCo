// Declare an array to store the filtered boxes
let filteredBoxes = [];

// Define an asynchronous function to handle the search
async function handleSearch() {
  // Get the search value from the input field
  let searchValue = document.getElementById('searchInput').value;
  // Clear the input field
  document.getElementById('searchInput').value = '';
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

// Define an asynchronous function to handle getting all boxes
async function handleGetAll() {
  // Send a GET request to the '/getAll' endpoint
  const response = await fetch('/getAll');
  // Wait for the response and convert it to JSON
  allBoxes = await response.json();

  // Get the result list element
  let resultList = document.getElementById('resultList');

  // Remove all child nodes of the result list to clear previous results
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }

  // Check if allBoxes.boxes is an array and has elements
  if (Array.isArray(allBoxes.boxes) && allBoxes.boxes.length > 0) {
    // If it does, create and append a list item for each box
    for (let i = 0; i < allBoxes.boxes.length; i++) {
      // Create a new list item
      let li = document.createElement('li');

      // Create a new h2 element for the box ID
      let id = document.createElement('h2');
      id.classList.add('customerId');
      id.textContent = `ID: ${allBoxes.boxes[i].id}`;

      // Create a new h3 element for the customer name
      let name = document.createElement('h3');
      name.classList.add('customerName');
      name.textContent = `Customer: ${allBoxes.boxes[i].name}`;

      // Create a new p element for the fruit
      let fruit = document.createElement('p');
      fruit.classList.add('customerFruit');
      fruit.textContent = `Articles: ${allBoxes.boxes[i].fruit}`;

      // Append the ID, name, and fruit elements to the list item
      li.appendChild(id);
      li.appendChild(name);
      li.appendChild(fruit);
      // Add the 'order' class to the list item
      li.classList.add('order');

      // Append the list item to the result list
      resultList.appendChild(li);
    }
  }

  // Return all boxes
  return allBoxes;
}

document.getElementById('showAll').addEventListener('click', handleGetAll);

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add a click event listener to the 'addButton' element
  document.getElementById('addButton').addEventListener('click', () => {
    // Get the value of the 'name' input field
    const name = document.getElementById('addName').value;
    // Get the value of the 'fruit' input field
    const fruit = document.getElementById('addFruit').value;
    // Clear the input fields
    document.getElementById('addName').value = '';
    document.getElementById('addFruit').value = '';

    // Generate a random ID
    const id = Math.floor(Math.random() * 100000) + 1;

    // Create a data object with the ID, name, and fruit
    const data = {
      Id: id,
      Name: name,
      // Split the fruit string into an array of fruits
      Articles: fruit.split(' '),
    };

    // Send a POST request to the '/addFruitBox' endpoint with the data object
    fetch('/addFruitBox', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Log the response data to the console
        console.log('Success:', data);
      })
      .catch((error) => {
        // Log any errors to the console
        console.error('Error:', error);
      });
  });
});

document.getElementById('search').addEventListener('click', () => {
  let searchBox = document.getElementById('searchBox');
  let addForm = document.getElementById('AddForm');

  if (searchBox) {
    searchBox.classList.add('active');
  }

  if (addForm && addForm.classList.contains('active')) {
    addForm.classList.remove('active');
  }
});

document.getElementById('add').addEventListener('click', () => {
  let addForm = document.getElementById('AddForm');
  let searchBox = document.getElementById('searchBox');

  if (addForm) {
    addForm.classList.add('active');
  }

  if (searchBox && searchBox.classList.contains('active')) {
    searchBox.classList.remove('active');
  }
});
