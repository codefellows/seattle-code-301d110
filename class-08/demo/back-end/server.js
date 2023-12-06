'use strict';

// Read variables from our .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT;

const app = express();
app.use(cors());


class Photo {
    constructor(photo) {
        this.url = photo.urls.regular;
        this.name = photo.slug;
    }
}

// Route Handlers

app.get('/', (request, response) => {
    response.send('Server Works!');
});


app.get('/photos', getPhotosFromUnsplash);

async function getPhotosFromUnsplash(request, response) {
   // Placeholder data
   let keywords = request.query.keywords;

   let axiosResponse = await axios.get(`https://api.unsplash.com/search/photos/`,
     {
        params: {
            client_id:process.env.UNSPLASH_ACCESS_KEY,
            query: keywords
        }
     });

     // console.log( axiosResponse.data.results);
     let photos = axiosResponse.data.results.map( photo => {
        return new Photo(photo);
     });

     console.log(photos);

   
   // Return a list of photos
   response.json(photos); 
}

app.get("*", (request, response) => {
    response.status(404).send("Not Found");
});

app.listen( PORT, () => console.log(`Running on ${PORT}`) );