import React from 'react';
import { Route } from 'react-router-dom';

const Empty = () => {
  window.location = '/login';

  return null
};


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    // localStorage.user
    true
      ? <Component {...rest} {...props} />
      : <Empty />
  )} />
);


export default PrivateRoute;