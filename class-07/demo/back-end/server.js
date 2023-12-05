'use strict';


// Pull data from a file (this will eventually be an API call...)
let suppliesList = require('./data/supplies.json');
let foodList = require('./data/food.json');
let theList = require('./data/list.json');

// Use a library called "dotenv" to "read" my .env file
// And put all of the "key/value" pairs into an object called process.env
require("dotenv").config();

// Bring in the "express" library 
const express = require("express");

// Bring in the "cors" library to let us have more open access to the server
const cors = require("cors");

// Initialize my express application
const app = express();

// Activate "cors"
app.use( cors() );

// Should be in the "enviornment"
const PORT = process.env.PORT || 3000;

// Route Handler
// "/" is the "route"
// (request, response) => {} is the handler callback
app.get('/', (request, response) => {
    let data = { message: "Goodbye World"};
    response.json(data);
});

// Pretend we have an error ...
// e.g. tried to an API call and the API was not available
// or database didn't find the username
app.get('/broken', (request,response) => {
  throw new Error("Something is totally broken");
})

// http://localhost:3000?type=food
// http://localhost:3000?type=supplies
app.get("/shopping-list", (request, response) => {
    let type = request.query.type;

    if( theList[type] ) {
        // theList[type] is the full array
        // How do I get part of it?
        // theLlist[type].filter();
        // thiList[type].find();
        response.json(theList[type])
    } else {
        throw new Error("No Such List")
    }
    
    // This was reading from 2 files
    // if ( type === "food" ) { 
    //     response.json(foodList);
    // } else if ( type === "supplies" ) { 
    //     response.json(suppliesList);
    // } else {
    //     throw new Error("No such list");
    // }
});

app.get("*", (request, response) => {
    response.status(404).send("Page Not Avaiable");
});

// Error Handler - 4 parameters to the callback
// Express automatically calls this when an error is "Thrown"
app.use( (error, request, response, next) => {
  response.status(500).send(error.message);
});


// Start up the web server
app.listen( 
    PORT, 
    () => console.log(`Listening on port ${PORT}`)
);
