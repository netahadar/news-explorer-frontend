import React from "react";
import logOutPath from "../../images/logout.svg";
import darkLogOutPath from "../../images/darkLogout.svg";
import "./NavigationButton.css";
import { UserContext } from "../../context/UserContext";
import { LoggedInContext } from "../../context/LoggdInContext";
import { useLocation } from "react-router-dom";

export default function NavigationButton({ onSignInClick }) {

  const location = useLocation();

  const userName = React.useContext(UserContext);
  const loggedIn = React.useContext(LoggedInContext);

  const loggedInButtonClass = "header__navigate-button_loggedin";
  const darkButtonClass = "header__navigate-button_theme_dark";

  return (
    <button
      className={`header__navigate-button 
      ${loggedIn && loggedInButtonClass} 
      ${location.pathname === "/saved-news" && darkButtonClass}`
    }
    onClick={!loggedIn && onSignInClick}
    >
      {loggedIn ? userName : "Sign In"}
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
