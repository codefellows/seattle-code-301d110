// 3rd party dependencies
const express = require('express');
const cors = require('cors');

// Get access to the dogs collection
const Dogs = require('./models/dogs.js')

const app = express();
app.use(cors());

app.get('/dogs', handleGetDogs);

async function handleGetDogs( request, response ) {
  let filter = { };
  const dogs = await Dogs.find(filter)
  response.status(200).json(dogs);
}

const server = {
  start: function(port) {
    app.listen(port, () => console.log(`Up on port ${port}`))
  }
}

module.exports = server;