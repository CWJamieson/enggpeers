import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./home/Home";
import Page from "./page/Page";
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/page' component={Page} />
      </Switch>
    </Router>
  );
};

export default App;
