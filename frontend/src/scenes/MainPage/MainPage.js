import React from 'react';
import { Route, Switch } from "react-router-dom";

import './MainPage.scss';
import Navbar from '../../containers/Navbar/Navbar';


const MainPage = (props) => {
  return (
    <div className="main-page">
      <Switch>
        <Route path="/" component={Navbar} />
      </Switch>
    </div>
  );
};

export default MainPage;