'use strict';

// 3rd Party Dependencies
const express = require('express');
const cors = require('cors');

// Esoteric Dependencies
const Dogs = require('./models/dogs.js');
const Dog = require('./models/dogs.js');

// Setup and Configure Express
const app = express();
app.use(cors());
// Teaches express how to parse/consume/translate information from a post or put request
app.use( express.json() );

// Routes
// --------------------------------

// PROOF OF LIFE ROUTES
app.get('/', handleHomePage);
app.get('/test', handleTest);

// CRUD ROUTES!
app.get('/dogs', handleGetDogs);
app.post('/dogs', handleAddDog )
app.delete('/dogs/:id', handleDeleteDog);
app.put('/dogs/:id', handleUpdateDog);

// Route Handler Functions ...
// --------------------------------

function handleHomePage(request, response) {
  response.send("Welcome to the server");
}
function handleTest (request, response) {
  response.send('test request received')
}

async function handleAddDog(request, response) {
  let dog = request.body;
  console.log("Adding", dog);

  let addedDog = await Dogs.create( dog );
  console.log('Mongo added:', addedDog);

  // Add this to the DB
  response.json(addedDog);
}

async function handleGetDogs(request, response) {
  const dogs = await Dogs.find();
  response.json(dogs);
}

async function handleDeleteDog(request, response) {
  let id = request.params.id;
  console.log('Deleting', id);
  // BAD: let deletedDog = await Dogs.findOneAndDelete(id);
  let deletedDog = await Dogs.findOneAndDelete({_id:id});
  // GOOD: let deletedDog = await Dogs.findByIdAndDelete(id);
  console.log("deleted", deletedDog);
  response.status(204).send({});
}

async function handleUpdateDog( request, response) {
  // Call on our Dog Model to do a "put" or an in-place update
  let dog = request.body;
  let id = request.params.id;

  const updatedDog = await Dogs.findByIdAndUpdate( id, dog, {new:true, overwrite:true })

  response.json(updatedDog);
}


// Server Mechanism
// --------------------------------

function startServer(port) {
  app.listen(port, () => console.log(`listening on ${port}`));
}

module.exports = { start: startServer };
