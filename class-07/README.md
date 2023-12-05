# Express Servers

## Overview

In this class we will build our own custom Express server in Node.js. We will server our front end static files and dive more deeply into the WRRC.

## Class Outline

- Warm-up exercise
- Review code challenges
- Introduction of the code challenge topic
- Code review of lab assignment
- Functional programming concepts
- Express Servers
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Async
- Server
- REST
- Express
  - Application Middleware
  - Route Middleware
- cors
- env variables
- WRRC

#### Execute

- Hook up a front end React application with a back end server
- Create an Express server from scratch

## Notes

1. What is a server?

1. What is express?

1. What is cors?

1. Why do we need a server?

1. Basic express server:

   ```javaScript
   'use strict';

   // this library lets us access our .env file
   require('dotenv').config();

   // express is a server library
   const express = require('express');

   // initalizes the express library
   const app = express();

   // library that determines who is allowed to speak to our server
   const cors = require('cors');


   // this settting says that everyone is allowed to speak to our server
   app.use(cors());

   // we are getting the port variable from the .env file.
   const PORT = process.env.PORT;

   // this is a route. if you turn the server on and go to http://localhost:3001/ (or whatever port you specified in your .env), you will see 'hello from the home route'
   app.get('/', (request, response) => {
     response.send('hello from the home route');
   });

   // this turns the server on to the port that you specifed in your .env file
   app.listen(PORT, () => console.log(`listening on ${PORT}`));
   ```

1. You can set up a route that your front-end can hit. Your server will return information on that route:

   ```javaScript
   // FRONT-END
   await axios.get('http://localhost:3001/cats');

   // BACK-END
   app.get('/cats', (request, response) => {
     response.send('cats are the best');
   });
   ```

1. You can also send information from the front-end to the back-end as a query.

   - Queries live in the URL after the question mark: `http://localhost:3000/?city=seattle`
   - To send that query to the back-end via axios, you could write code like:

     ```javaScript
     //FRONT-END
     await axios.get('http://localhost:3001/city', {params: { city: 'seattle' }});

     // BACK-END
     app.get('city', (request, response) => {
       const city = reqeust.query.city;
       response.send(`you sent the city of ${city}`)
     });
     ```

## Getting Started

### React App

1. Create a new React App with Vite `npm create vite@latest front-end`
1. Perform initial installation and add any dependencies
   - `npm install`
   - `npm install axios bootstrap react-bootstrap react-if` 
1. Create a repository (front-end) at GitHub
1. Connect your React App to GitHub
   - git init
   - git branch -M main
   - git remote add origin (url to your repo, copied from gitHub)
   - git add .
   - git commit -m "initial commit"
   - git push origin main
1. Clear out all of the starter-code from the app and alter `App.jsx` to just render an `<h1>` with Hello World in it 
1. Deploy your app to Netlify
1. Verify that you can see the starte app deployed at Netlify

### Express App

1. Create a new repository (back-end) at GitHub
   - Add a README
   - Choose the MIT license
   - Choose the "Node" .gitignore template
   - Make it "public"
   - Copy the URL
1. Clone this on your computer in a different folder from your react app
1. Create a file called server.js (`touch server.js`)
1. Initialize an NPM module 
   - `npm init -y`
   - Install the basic dependencies for an express app
   - `npm install express cors dotenv axios`
1. Write a basic express server (use the above notes and demo as the basis)
1. Store the `PORT` in a file called `.env`
1. Deploy this to Render.com
1. Verify that you can see data coming from the `/` route once deployed

### Getting them to work together

1. Change your Express server's `/` route to return a JSON object. Something simple like:
   `{ message: "Hello" }`
1. Push to gitHub so that it deploys to render.com
1. Add a button to your React app that, when clicked, will do an async axios call to your server's `/` route
   - This will require that you put the URL to your server in the `.env.local` file and use that in the app to make the Axios call
   - We do this for security!
   - (This is shown in the demo)
1. When the data comes back, put it into state, and render that `message` in the `<h1 />`
1. Push to github so that it will deploy to netlify.com

At this point, you should be able to click a button and see the data from your server flowing to the front-end.

From this point, you can tailor the server and the react app together to accomplish ANY goal!
