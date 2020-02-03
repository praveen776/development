import React from 'react';
import './App.css';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import Update from './update';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/update" />
        <Route exact path="/update" component={Update} />
        </Switch>
    </Router>
      )
    }
    
    export default App;
