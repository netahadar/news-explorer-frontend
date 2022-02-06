import React from "react";
import { useLocation } from "react-router-dom";
import logOutPath from "../../images/logout.svg";
import darkLogOutPath from "../../images/darkLogout.svg";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { LoggedInContext } from "../../context/LoggdInContext";
import { LOGGED_IN_BUTTON_CLASS, DARK_BUTTON_CLASS } from "../../utils/constants";
import "./NavigationButton.css";


export default function NavigationButton({ onSignInClick, onLogOut }) {

  const location = useLocation();

  const currentUser = React.useContext(CurrentUserContext);
  const loggedIn = React.useContext(LoggedInContext);

  return (
    <button
      className={`header__navigate-button 
      ${loggedIn && LOGGED_IN_BUTTON_CLASS} 
      ${location.pathname === "/saved-news" && DARK_BUTTON_CLASS}`
    }
    onClick={!loggedIn  ?onSignInClick :onLogOut}
    >
      {loggedIn ? currentUser.name : "Sign In"}
      {loggedIn && (
        <img
          className="header__nevigate-button-icon"
          src={location.pathname === "/saved-news" ? darkLogOutPath :logOutPath}
          alt="log out"
        ></img>
      )}
    </button>
  );
}
