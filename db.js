const { MongoClient } = require('mongodb');

// Replace '<your_connection_string>' with your MongoDB connection string
const uri = 'mongodb+srv://<...>.6vyjp2h.mongodb.net/';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

async function closeDatabase() {
  try {
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
  }
}

module.exports = { connectToDatabase, closeDatabase, client };
