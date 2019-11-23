import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";

import './api-config';
import { initApp } from './ducks/auth';
import useDidMount from './hooks/useDidMount';

import { ROUTES } from './constants';

import './App.scss';
import Socket from './components/Socket';
import MainPage from "./scenes/MainPage/MainPage";
import NotFound from "./scenes/NotFound/NotFound";
import LoginPage from './scenes/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const PrivateRoutes = (props) => {
  useDidMount(() => {
    props.initApp();
  });

  return (
    <>
      <Socket />

      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = {
  initApp,
};

const ConnectedPrivateRoutes = connect(null, mapDispatchToProps)(PrivateRoutes);

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.login} component={LoginPage} />

      <PrivateRoute path="/" component={ConnectedPrivateRoutes} />

      <Route path={ROUTES.notFound} component={NotFound} />
      <Redirect to={ROUTES.notFound} />
    </Switch>
  );
}

export default App;