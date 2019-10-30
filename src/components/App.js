import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WEB_URL } from '../helpers/constants';
import Home from "./home/Home";
import Page from "./page/Page";
import './App.css';

const App = () => {
  return (
    <iframe src={"https://www.uoguelph.ca/engineering/peer/book-meeting"} />
    // <Router>
    //   <Switch>
    //     <Route exact path={`${WEB_URL}/`} component={Home} />
    //     <Route path={`${WEB_URL}/page`} component={Page} />
    //   </Switch>
    // </Router>
  );
};

export default App;
