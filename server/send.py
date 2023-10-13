import pymongo
import json
import ssl

def sendData():
    #uri = 'mongodb+srv://Cluster32009:CLUSTER32009@cluster32009.6vyjp2h.mongodb.net/?retryWrites=true&w=majority';
    database_name = "userData"
    collection_name = "testCollection"

    # Sample JSON data
    data = {
    
    "car": "Toyota Camry",
    "trip": {
        "start_time": "2023-09-20T08:00:00",
        "end_time": "2023-09-20T09:30:00",
        "distance": 45.2, 
        "average_speed": 30, 
        "route": [
        {
            "timestamp": "2023-09-20T08:00:00",
            "latitude": 34.0522,
            "longitude": -118.2437,
            "speed": 0 
        },
        {
            "timestamp": "2023-09-20T08:15:00",
            "latitude": 34.0657,
            "longitude": -118.2361,
            "speed": 25 
        },
        {
            "timestamp": "2023-09-20T08:30:00",
            "latitude": 34.0762,
            "longitude": -118.2607,
            "speed": 40 
        },
        {
            "timestamp": "2023-09-20T09:00:00",
            "latitude": 34.0901,
            "longitude": -118.3369,
            "speed": 60 
        },
        {
            "timestamp": "2023-09-20T09:30:00",
            "latitude": 34.0522,
            "longitude": -118.2437,
            "speed": 0 
        }
        ]
    }
    }



    try:
        # Connect to MongoDB
        client = pymongo.MongoClient("mongodb+srv://augustinolss:u3Ecaad6IUDOzsGZ@cluster1.6jmf4jj.mongodb.net/?retryWrites=true&w=majority")
        
        # Select the database and collection
        db = client[database_name]
        collection = db[collection_name]
        
        # Insert the JSON data into the collection
        collection.insert_one(data)
        
        print("Data inserted successfully!")

    except Exception as e:
        print(f"An error occurred: {str(e)}")


