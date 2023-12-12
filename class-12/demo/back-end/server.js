'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./models/Book.js');

const app = express();
app.use(cors());

// Teaches express how to parse/consume/translate information from a post or put request
app.use( express.json() );

const PORT = process.env.PORT || 3001;

// "/" is the "default" or "home page" route
app.get('/', (request, response) => {
  response.send('Home Page');
});

// "/test" is a proof of life route
app.get('/test', (request, response) => {
  response.send('test request received')
});

app.post('/books', handleAddBook )

async function handleAddBook(request, response) {
  let book = request.body;
  console.log("Adding", book);

  let addedBook = await Books.create( book );
  console.log('Mongo added:', addedBook);

  // Add this to the DB
  response.json(addedBook);
}

app.get('/books', async (request, response) => {
  const books = await Books.find();
  response.json(books);
});

app.delete('/books/:id', async (request, response) => {
  let id = request.params.id;
  console.log('Deleting', id);
  // BAD: let deletedBook = await Books.findOneAndDelete(id);
  let deletedBook = await Books.findOneAndDelete({_id:id});
  // GOOD: let deletedBook = await Books.findByIdAndDelete(id);
  console.log("deleted", deletedBook);
  response.status(204).send({});
});

mongoose.connect( process.env.MONGODB_URL );
app.listen(PORT, () => console.log(`listening on ${PORT}`));
