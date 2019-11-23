import React from "react";
import { withRouter } from 'react-router-dom';
import {
  faHome,
  faEnvelope,
  faUsers,
  faBell,
} from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss';
import NavbarItem from "./components/NavbarItem";


const Navbar = (props) => {
  const path = props.history.location.pathname;

  return (
    <nav className="navbar">
      <NavbarItem
        icon={faHome}
        text='Home'
        isActive={path === '/'}
      />

      <NavbarItem
        icon={faUsers}
        text='People'
        isActive={path === '/people'}
      />

      <NavbarItem
        icon={faEnvelope}
        text='Messages'
        isActive={path === '/messages'}
      />

      <NavbarItem
        icon={faBell}
        text='Notifications'
        isActive={path === '/notifications'}
      />
    </nav>
  )
};

export default withRouter(Navbar);