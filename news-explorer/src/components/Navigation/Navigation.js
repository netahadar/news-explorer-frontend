/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavigationButton from "../NavigationButton/NavigationButton";

export default function Navigation({ isLoggedIn, userName }) {
  // For testing:
  Location.pathname = "/home";

  const activeLinkClass = "header__navigate-link_active";

  return (
    <nav className="header__navigate">
      <a
        className={
          Location.pathname === "/home"
            ? `header__navigate-link ${activeLinkClass}`
            : "header__navigate-link"
        }
        href="#"
      >
        Home
      </a>
      {isLoggedIn && 
        <a
          className={
            Location.pathName === "/articles"
              ? `header__navigate-link ${activeLinkClass}`
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
