import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = (props) => {
  const advancedSearchTitle = props.advancedOptionsActive ? 'Close Options' : 'Advanced Options'
  return (
    <div className="header-right">
      <p className="menu">

        <a role="button" onClick={props.toggleAdvancedOptions}>{advancedSearchTitle}</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a role="button" onClick={props.activateUserSettingsBox}>Settings</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/about">About</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a role="button" onClick={props.logout}>Logout</a>
      </p>
    </div>
  )
}

export default HeaderMenu;
