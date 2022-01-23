import React from "react";
import logOutPath from "../../images/logout.svg";
import darkLogOutPath from "../../images/darkLogout.svg";
import "./NavigationButton.css";

export default function NavigationButton({ isLoggedIn, userName }) {
  const loggedInButtonClass = "header__navigate-button_loggedin";
  const darkButtonClass = "header__navigate-button_theme_dark";

  return (
    <button
      className={`header__navigate-button 
      ${isLoggedIn && loggedInButtonClass} 
      ${Location.pathname === "/articles" && darkButtonClass}`
    }
    >
      {isLoggedIn ? userName : "Sign In"}
      {isLoggedIn && (
        <img
          className="header__nevigate-button-icon"
          src={Location.pathname === "/articles" ? darkLogOutPath :logOutPath}
          alt="log out"
        ></img>
      )}
    </button>
  );
}
