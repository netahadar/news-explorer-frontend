/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavigationButton from "../NavigationButton/NavigationButton";
import './Navigation.css';

export default function Navigation({ isLoggedIn, userName }) {
  // For testing:
  Location.pathname = "/articles";

  const homeLinkClass = "header__navigate-link header__navigate-link_home";
  const darkLinkClass = "header__navigate-link header__navigate-link_theme_dark"
  const savedArticlesLinkClass = "header__navigate-link header__navigate-link_articles";

  return (
    <nav className="header__navigate">
      <a
        className={
          Location.pathname === "/home"
            ? homeLinkClass
            : darkLinkClass
        }
        href="#"
      >
        Home
      </a>
      {isLoggedIn && 
        <a
          className={
            Location.pathname === "/articles"
              ? savedArticlesLinkClass
              : "header__navigate-link"
          }
          href="#"
        >
          Saved Articles
        </a>
      }
      <NavigationButton isLoggedIn={isLoggedIn} userName={userName} />
    </nav>
  );
}
