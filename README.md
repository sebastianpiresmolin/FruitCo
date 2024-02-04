# FruitCo API

This project aims to build an API for managing fruit boxes. The essential endpoints include `getAll()`, `getById()`, `addFruitBox()`, and `getBoxesIncludingFruit()` These endpoints are accessible using tools like Postman and similar platforms, utilizing port 8001 for Express.

## Fruitbox Object
The "Fruitbox" object comprises an Id, a recipient's name, and a list of articles treated as strings.
```json
{
  "Id": number,
  "Name": string,
  "Articles": string[]
}
```

## Endpoints

### `getAll()`
Retrieve all fruit boxes.

### `getById(Id: number)`
Retrieve the fruit box with a specific Id.

### `addFruitBox()`
Add a new fruit box to the list.

### `getBoxesIncludingFruit(fruit: string)`
Retrieve a list of boxes containing the specified fruit.

## Getting Started
1. Clone the repository.
   ```bash
   git clone https://github.com/sebastianpiresmolin/FruitCo.git
   ```
2. Install dependencies.
   ```bash
   cd FruitCo
   npm install
   ```
3. Run the Express server.
   ```bash
   npm start
   ```

## Example Usage
### Using `getAll()`
```http
GET http://localhost:8001/getAll
```

### Using `getById(Id: number)`
```http
GET http://localhost:8001/getById/1
```

### Using `addFruitBox()`
```http
POST http://localhost:8001/addFruitBox
Content-Type: application/json

{
  "Name": "John Doe",
  "Articles": ["Apple", "Banana", "Orange"]
}
```

### Using `getBoxesIncludingFruit(fruit: string)`
```http
GET http://localhost:8001/getBoxesIncludingFruit/Apple
```

Feel free to explore the functionality of the FruitCo API! If you encounter any issues or have suggestions for improvements, please submit them through the repository's issue tracker.
