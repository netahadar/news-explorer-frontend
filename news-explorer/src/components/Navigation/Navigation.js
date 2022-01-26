/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LoggedInContext } from "../../context/LoggdInContext";
import NavigationButton from "../NavigationButton/NavigationButton";
import "./Navigation.css";

export default function Navigation({ onSignInClick }) {
  const location = useLocation();

  const loggedIn = React.useContext(LoggedInContext);

  const homeLinkClass = "header__navigate-link header__navigate-link_home";
  const darkLinkClass =
    "header__navigate-link header__navigate-link_theme_dark";
  const savedArticlesLinkClass =
    "header__navigate-link header__navigate-link_articles";

  return (
    <nav className="header__navigate">
      <Link
        className={location.pathname === "/" ? homeLinkClass : darkLinkClass}
        to="/"
      >
        Home
      </Link>
      {loggedIn && (
        <Link
          className={
            location.pathname === "/"
              ? "header__navigate-link"
              : savedArticlesLinkClass
          }
          to="/saved-news"
        >
          Saved Articles
        </Link>
      )}
      <NavigationButton
        onSignInClick={onSignInClick}
      />
    </nav>
  );
}
