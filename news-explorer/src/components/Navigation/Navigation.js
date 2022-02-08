/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LoggedInContext } from "../../context/LoggdInContext";
import NavigationButton from "../NavigationButton/NavigationButton";
import {
  HOME_LINK_CLASS,
  DARK_LINK_CLASS,
  SAVED_ARTICLES_LINK_CLASS,
} from "../../utils/constants";
import "./Navigation.css";

export default function Navigation({ onSignInClick, onLogOut }) {
  const location = useLocation();

  const loggedIn = React.useContext(LoggedInContext);

  return (
    <nav className="header__navigate">
      <Link
        className={location.pathname === "/" ? HOME_LINK_CLASS : DARK_LINK_CLASS}
        to="/"
      >
        Home
      </Link>
      {loggedIn && (
        <Link
          className={
            location.pathname === "/"
              ? "header__navigate-link"
              : SAVED_ARTICLES_LINK_CLASS
          }
          to="/saved-news"
        >
          Saved Articles
        </Link>
      )}
      <NavigationButton onSignInClick={onSignInClick} onLogOut={onLogOut} />
    </nav>
  );
}
