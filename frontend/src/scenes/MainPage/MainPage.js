import React from 'react';
import { Route, Switch } from "react-router-dom";

import { ROUTES } from '../../constants';

import './MainPage.scss';
import Navbar from '../../containers/Navbar/Navbar';
import Home from '../../containers/Home/Home';
import Messages from '../../containers/Messages/Messages';
import Network from '../../containers/Network/Network';
import Notifications from '../../containers/Notifications/Notifications';
import People from '../../containers/People/People';


const MainPage = () => {
  return (
    <div className="main-page">
      <Route path="/" component={Navbar} />

      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.messages} component={Messages} />
        <Route exact path={ROUTES.network} component={Network} />
        <Route exact path={ROUTES.notifications} component={Notifications} />
        <Route exact path={ROUTES.people} component={People} />
      </Switch>
    </div>
  );
};

export default MainPage;