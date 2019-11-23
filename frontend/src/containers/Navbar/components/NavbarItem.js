import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavbarItem = (props) => {
  return (
    <Link to={props.link} style={{ textDecoration: 'none' }}>
      <div className={'navbar__item' + (props.isActive ? ' navbar__item--active' : '')}>
        <FontAwesomeIcon
          icon={props.icon}
          className='navbar__item-icon'
        />

        <span className='navbar__item-text'>{props.text}</span>
      </div>
    </Link>
  )
};

export default NavbarItem;