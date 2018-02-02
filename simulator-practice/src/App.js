import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Users from './components/Users/Users';
import Editor from './components/Editor/Editor';
import Home from './components/Home/Home'

class App extends Component {
  constructor(props) {
    super(props) 
  }

  
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">check out my changes</h1>
          <Link to="/">Home</Link>
          <Link to="/editor">Editor</Link>
          <Link to="/users">Users</Link>
        </header>
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </div>
    );
  }
}

export default App;
