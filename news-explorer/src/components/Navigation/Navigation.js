/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import NavigationButton from "../NavigationButton/NavigationButton";
import './Navigation.css';

export default function Navigation({ isLoggedIn, userName }) {
  // For testing:
  Location.pathname = "/";

  const homeLinkClass = "header__navigate-link header__navigate-link_home";
  const darkLinkClass = "header__navigate-link header__navigate-link_theme_dark"
  const savedArticlesLinkClass = "header__navigate-link header__navigate-link_articles";

  return (
    <nav className="header__navigate">
      <Link
        className={
          Location.pathname === "/"
            ? homeLinkClass
            : darkLinkClass
        }
        to="/"
      >
        Home
      </Link>
      {isLoggedIn && 
        <Link
          className={
            Location.pathname === "/"
              ? "header__navigate-link"
              : savedArticlesLinkClass
          }
          to="/saved-news"
        >
          Saved Articles
        </Link>
      }
      <NavigationButton isLoggedIn={isLoggedIn} userName={userName} />
    </nav>
  );
}
