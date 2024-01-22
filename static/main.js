// Search by id or fruit name function
document
  .getElementById('searchButton')
  .addEventListener('click', function handleSearch() {
    let searchValue = document.getElementById('search').value;

    if (isNaN(searchValue)) {
      window.location.href = `http://localhost:8001/getBoxesIncludingFruit/${searchValue}`;
    } else {
      window.location.href = `http://localhost:8001/getAllById/${searchValue}`;
    }
  });

// Display all fruit boxes function
document
  .getElementById('getAll')
  .addEventListener('click', function handleGetAll() {
    window.location.href = `http://localhost:8001/getAll`;
  });
