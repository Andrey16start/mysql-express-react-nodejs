import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavbarItem = (props) => {
  return (
    <div className={'navbar__item' + (props.isActive ? ' navbar__item--active' : '')}>
      <FontAwesomeIcon
        icon={props.icon}
        className='navbar__item-icon'
      />

      <span className='navbar__item-text'>{props.text}</span>
    </div>
  )
};

export default NavbarItem;