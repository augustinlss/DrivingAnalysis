
# Web-Server Docuentation

This is the Documentation for the web-server on which the DAT web application runs.

### 1. The Database
The database for our prototype will be stored and manipulated using MongoDB serivces.

As we are working on a prototype for demonstration purposes, we will only have one user in the database (or at least only one for whom data will be updated) because implementing user changing is an unnecessary feature here.

Here is the schema of the prototype:

```
const userSchema = new Schema({
    lastKnownLocation: Array,
    distanceDrivenPol: Number,
    distanceDrivenNPol: Number,
    emissionsPM: Array,
});
```
lastKnownLocation: should be the last location that the gps visited. When the DAT is turned on, its current location should be set to this variable.

distanceDrivenPol: This is the distance driven by the user in an urban area. For our prototype, this is limited to the city of Eindhoven. 

distanceDrivenPol: This is the distance driven by the user in a non-urban area. For our prototype, this is limited to outside the city of Eindhoven. 

emissionsPM: This is an Array containing the C02 emissions of he user each month. (Fake values (that nevertheless reflect real life possibilites) were set for months january to september).

### 2. API Reference
The web-server is hosted at https://dat-driving-analysis-tool-146b65ff2bdf.herokuapp.com/

#### Set new starting location

```http
  POST /api/send/startSession
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `location` | `Array` | **Required**. Latitude and longitude of starting location (type: double)|

#### Update data.

```http
  POST /api/send/data
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `location` | `Array` | **Required**. Latitude and longitude of starting location (type: double)|


The calculations are done internally in the server.


