const express = require('express');
const app = express();
const port = 3000; // Choose a port
const { connectToDatabase, closeDatabase, client } = require('./db'); // Adjust the path as needed

// Connect to the database when your server starts
connectToDatabase();

// Handle routes and other application logic here

// Close the database connection when your server shuts down
process.on('SIGINT', async () => {
  await closeDatabase();
  process.exit(0);
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});