'use strict';

// Read the environment
require('dotenv').config();

// Mongoose!
const mongoose = require('mongoose');

// Import my server.js file
// "server" below is ... 
const server = require('./server.js');

// Start the database
mongoose.connect( process.env.MONGODB_URL );

// Start the server
server.start(process.env.PORT || 3001);