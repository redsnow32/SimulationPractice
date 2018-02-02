Setting up your create React App
1. Create react app
2. install dependencies for your main app. 
    axios
    react-router-dom
    HashRouter
    react-redux
    redux


    
////////////////////////////////////////////////////////////////////////////////////////////////
Setting up your server
1. Create a folder called server
2. Create a file called either index.js or server.js
3. Create a controller that will be used to communicate between your server and database
4. Install dependencies:
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const massive = require('massive');
    massive = require('massive');
    const server = require('express');
    const axios = require('axios');
    const session = require('express-session');
    require('dotenv').config();

5. Create a .env file in the very root of your app so the server can access this app. You'll need to put both     your CONNECTION_STRING = for DB and PORT in this file for reference. You'll need to reference process.env      when invoking the strin and port within your server. require('dotenv').config() at the top of your file.          

6. Create a controller within your server file so it can communicate with your database. You'll need
    to reference your controller within your server so it can reference your server and house all the functions there. 
    -const ctrl = require('../db/ctrl/ctrl');
7. Once the ctrl is created, you'll need to use module.exports={create: read: update: delete} all the functions
    you'll be useing to update your CRUD.
8. Create your server by invoking  const app = express();
9. Invoke app.use(bodyParser.json) in order for us to recieve the data from our app.
10. Invoke app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: true
}))

11. Add the middleware you want to use between your app.use(session) and app.listen();
12. App app.listen at the bottom of the page in order for your server to listen for the changes being made on       your app. Destructure your const {SERVER_PORT} = process.env;
        - app.listen(SERVER_PORT, ()=> console.log(`Listening to port ${ SERVER_PORT }`))

////////////////////////////////////////////////////////////////////////////////////////////////
Setting up a massive database
1. create a new app on Heroku
2. Add the resource Heroku Postgress :: Database
3. Before creating your db, you need to add ?ssl=true on the very end. This is a must in order for this to        work.
4. create a .env file and import your CONNECTION_STRING = for DB. You can also have your PORT for the server        here as well for reference in your server. 