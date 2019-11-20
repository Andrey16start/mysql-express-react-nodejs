import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './api-config';

import './App.scss';
import Socket from './components/Socket';
import MainPage from "./scenes/MainPage/MainPage";
import NotFound from "./scenes/NotFound/NotFound";
import LoginPage from './scenes/LoginPage/LoginPage';


const App = () => {
  return (
    <>
      <Socket />

      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;