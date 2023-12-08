'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// 3rd Party Dependencies
const express = require('express');
const cors = require('cors');

// Internal Dependencies
const handleGetPhotos = require("./handlers/photos");

// Application Initializers
const app = express();

// Middleware
app.use( cors() );

// Route Handlers
app.get('/', handleHomePage);
app.get('/photos', handleGetPhotos);
app.get("*", handleNotFound);
app.use(errorHandler);

// ----------------- //
// Handler Functions
function handleHomePage( request, response ) {
  response.status(200).send("Welcome Home");
}

function handleNotFound( request, response) { 
  response.status(404).send("These are not the droids you are looking for");
}

function errorHandler(error, request, response, next) {
  response.status(500).send("An error occured");
}

// Start the server
app.listen( PORT, () => console.log(`Listing on port ${PORT}`));
