import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './App.scss';
import MainPage from "./scenes/MainPage/MainPage";
import NotFound from "./scenes/NotFound/NotFound";
import LoginPage from './scenes/LoginPage/LoginPage';


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;