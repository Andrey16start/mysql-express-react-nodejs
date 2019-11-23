import React from "react";
import { withRouter } from 'react-router-dom';
import {
  faHome,
  faEnvelope,
  faUsers,
  faBell,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'

import { ROUTES } from "../../constants";

import './Navbar.scss';
import NavbarItem from "./components/NavbarItem";


const Navbar = (props) => {
  const path = props.history.location.pathname;

  return (
    <nav className="navbar">
      <NavbarItem
        icon={faHome}
        text='Home'
        link='/'
        isActive={path === '/'}
      />
      <NavbarItem
        icon={faProjectDiagram}
        text='My Network'
        link={ROUTES.network}
        isActive={path === ROUTES.network}
      />
      <NavbarItem
        icon={faUsers}
        text='People'
        link={ROUTES.people}
        isActive={path === ROUTES.people}
      />
      <NavbarItem
        icon={faEnvelope}
        text='Messages'
        link={ROUTES.messages}
        isActive={path === ROUTES.messages}
      />
      <NavbarItem
        icon={faBell}
        text='Notifications'
        link={ROUTES.notifications}
        isActive={path === ROUTES.notifications}
      />
    </nav>
  )
};

export default withRouter(Navbar);