'use strict';

// Third Party Dependencies
const axios = require('axios');

// Internal Dependencies
const Photo = require('../data-models/Photo.js');

/*
  cache {
    cars: {
      timeout: '6pm',
      data: [ {}, {} ]
    },
    kittens: [ {}, {} ]
  }
*/
const cache = {};

// Actual Route Handler
async function handleGetPhotos(request, response) {

    let search = request.query.search;

    // if ( cache[search].timeout < now ) { get new stuff }
    if ( ! cache[search] ) {

      // Fetch a list of photos from unsplash and send THOSE to the app
      let queryObject = {
        params: {
          query: search,
          client_id: process.env.UNSPLASH_KEY
        }
      };

      console.log(`Fetching ${search} Photos from the API`);
      let apiResponse = await axios.get( "https://api.unsplash.com/search/photos", queryObject );

      // apiResponse.data.results is the full array
      // In each of those, we only need the alt_description and the urls.raw

      let photos = apiResponse.data.results.map( photo => {
        return new Photo(photo)
      });

      cache[search] = photos;
    }

    else {
      console.log(`We have ${search} in cache, sending it`);
    }

    // console.log(cache);

    response.status(200).json( cache[search] );
  }


  module.exports = handleGetPhotos;
