'use strict';

// Third Party Dependencies
const axios = require('axios');

// Internal Dependencies
const Photo = require('../data-models/Photo.js');

// Actual Route Handler
async function handleGetPhotos(request, response) {
    let search = request.query.search;
  
    // Fetch a list of photos from unsplash and send THOSE to the app
    let queryObject = { 
      params: {
        query: search,
        client_id: process.env.UNSPLASH_KEY
      }
    };
  
    let apiResponse = await axios.get( "https://api.unsplash.com/search/photos", queryObject );
    
    // apiResponse.data.results is the full array
    // In each of those, we only need the alt_description and the urls.raw
  
    let photos = apiResponse.data.results.map( photo => {
      return new Photo(photo)
    });
    
    response.status(200).json(photos);
  }
  

  module.exports = handleGetPhotos;