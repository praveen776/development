import React from 'react';
import './App.css';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import Update from './update';
import Register from './register';
import Login from './login';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/register" />
        <Route exact path="/update" component={Update} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App;
