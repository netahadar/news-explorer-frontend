import React from 'react';
import logOutPath from '../../images/logout.svg';

export default function NavigationButton({ isLoggedIn, userName }) {
  const loggedInButtonClass = "header__navigate-button_loggedin";

  return (
    <button
      className={
        isLoggedIn
          ? `header__navigate-button ${loggedInButtonClass}`
          : "header__navigate-button"
      }
    >
        {isLoggedIn ? userName : 'Sign In'}
        {isLoggedIn && <img className="header__nevigate-button-icon" src={logOutPath} alt="log out"></img>}
    </button>
  );
}
