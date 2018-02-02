Setting up your create React App
1. Create react app
2. install dependencies for your main app. 
    axios
    react-router-dom
    HashRouter
    react-redux - if using redux
    redux - if using redux
4. index.js
    - import the dependencies you'll need. 
    - import { HashRouter as Router } from 'react-router-dom'  used for Routing
    - import { Provider } from 'redux'
    - import store from './files....'
5. wrap you <App /> with your provider and your Router ex.
     - ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App>
                </Provider>
            </Router>,
        document.getElementById('root')
);
6. Create your store within the root of your source folder. 
    - import { createStore, applyMiddleware } from 'redux';
    - import promiseMiddleware from 'redux-promise-middleware'
    - import reducer from './file'
    - export default createStore(reducer, applyMiddleware, (promiseMiddleWare()))

7. Create a reducer folder with the reducer.js file inside.
    - import your url's you're going to be using  (if needed)
    - import axios from 'axios'
    - Create your initial state, declare your functions and export your functions
        - ex. 
        const initialState = {
            user:'';

        }
        const LOGIN = 'LOGIN'

        export default function(state = initialState, action) {
            let { payload } = action
            switch(action.type) {
                case: LOGIN:
                return Object.assign({}, state, {user: payload.username})
            }
        }
        export function login(obj, history) {
            type: LOGIN,
            payload: axios.post(URL.register, obj).then(res=>{
                history.push('/shop');
                return res.data
            })
        }
8. create a router that houses all of your routes within one file. 
    - import React from 'react'
    - import { Switch, Route } from 'react-router-dom'
    - import components you'll be routing to ex. Login, Shop
    - export default (
        <Switch>
            <Route component={ Login } path='/' exact />>
            <Route component = { Shop } path='/shop'>
        </Switch>
    )
9. App.js
    - import React from 'react'
    - import router from './filename'
    - deconstruct the { router } within the App "or rendering parent" div.

10. Create the components you'll need for your app. Remember that if you're using Redux, you'll need to             subscribe to the store with the ... import { connect } from 'react-redux'
        - import the functions at the top of the page by using the following flow
            - import { function } from '../../reducer'
    - Create your function of mapStateToProps in order to get the information back to the reducer. This will        also have to have the object you're sending to the reducer with the function that's created in the         reducer. 
        
        function mapStateToProps(state) {
            const {cost, downPayment} = state
            return {cost, downPayment}
}

export default connect(mapStateToProps,{updateCost, updateDown})(WizardSix)
    
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

6. Create a controller folder within your server file so it can communicate with your database. You'll need
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

11. Add the middleware you want to use between your app.use(session) and app.listen(); The middleware folder should be within the server folder. 
12. App app.listen at the bottom of the page in order for your server to listen for the changes being made on       your app. Destructure your const {SERVER_PORT} = process.env;
        - app.listen(SERVER_PORT, ()=> console.log(`Listening to port ${ SERVER_PORT }`))

////////////////////////////////////////////////////////////////////////////////////////////////
Setting up a massive database
1. create a new app on Heroku
2. Add the resource Heroku Postgress :: Database
3. Before creating your db, you need to add ?ssl=true on the very end. This is a must in order for this to        work.
4. Create a .env file and import your CONNECTION_STRING = for DB. You can also have your PORT for the server        here as well for reference in your server. 
5. Create a .gitignore file and add all the .env files as well as the node_modules you dont wan't to push.
6. Create the tables you need for your project within the SQL tabs.
7. Add a db file on the innermost root of your project. This is where the .sql files with your querys will be       housed so the server can access these files. If the db folder is not on the root level, the server will        not recognize these files. 
