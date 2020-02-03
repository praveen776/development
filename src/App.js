import React from 'react';
import './App.css';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import Login from './login';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
      )
    }
    
    export default App;
