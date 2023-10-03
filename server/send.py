import pymongo
import json
import ssl

# Replace these values with your MongoDB connection details
uri = 'mongodb+srv://Cluster32009:CLUSTER32009@cluster32009.6vyjp2h.mongodb.net/?retryWrites=true&w=majority';
database_name = "testdb"
collection_name = "testCollection"

# Sample JSON data
data = {
    "time": 00-00-00,
    "speed": 80,
    "emissions": [20, 24, 32, 29, 36]
}

try:
    # Connect to MongoDB
    client = pymongo.MongoClient(uri)
    
    # Select the database and collection
    db = client[database_name]
    collection = db[collection_name]
    
    # Insert the JSON data into the collection
    collection.insert_one(data)
    
    print("Data inserted successfully!")

except Exception as e:
    print(f"An error occurred: {str(e)}")


