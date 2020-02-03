import React from 'react';
import './App.css';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import Register from './register'


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/register" />
        <Route exact path="/register" component={Register} />

        </Switch>
    </Router>
      )
    }
    
    export default App;
