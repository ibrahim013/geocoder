## Backend Geocoder  API

This API stores a list of locations by its name, longitude, and latitude.

## Getting Started
* Clone the repository git clone `https://github.com/ibrahim013/geocoder.git`

* cd into project directory

* Install packages by runing `npm i`

* Change .env.sample to .env and add the needed values

* Start application with `npm start`

## API Endpoints
| Endpoint |	HTTP Method	| Description|
| -------- |:------------:| ----------:|
|/api/v1/create-location | POST | create a location on map |
|/api/v1/edit-location/:locationId | PUT |edit an existing map location |
| /api/v1/locations |	GET	|Get all map locations|
|/api/v1/delete-location/:locationId|	DELETE|	Delete a location by id|

# Documentation
Visit API DOC for API documentation

# Technologies
* MongoDB
* Express
* Node.js
* Jest

## Design Decision
### Why Express and MongoDB
Express simplifies the process of writing an HTTP server in Node.js, a highly flexible and lightweight web application framework with robust routing tools. It also has a high performance and maintenance edge over other frameworks like Hapi. on the other hand, MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which support various data forms with the following advantages:
* Schema-less design
* Scalability in managing Terabytes of data
* Rapid replica Set with high availability feature
* Sharding enables linear and scale out growth
* Support high write load
* Use of Data locality for query processing
