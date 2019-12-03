import React from 'react';
import { Route } from 'react-router-dom';

const Empty = () => {
  window.location = '/login';

  return null;
};


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.token
      ? <Component {...rest} {...props} />
      : <Empty />
  )} />
);


export default PrivateRoute;