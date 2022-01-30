import React from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({
  isMobile,
  onSignInClick,
  onMenuClick,
  onClose,
  isNavOpen,
  onLogOut
}) {
  const location = useLocation();

  const darkTextClass = "header__text header__text_theme_dark";
  const navOpenClass = "header__menu header__menu_state_open";
  const headerMenuDark = "header__menu header__menu__theme_dark";

  return (
    <header className="header">
      <div className="header__container">
        <Link
          className={`${isNavOpen  ?"header__text" :location.pathname === "/" ? "header__text" : darkTextClass}`}
          to="/"
        >
          NewsExplorer
        </Link>
        {isMobile ? (
          <button
            className={`header__menu ${
              isNavOpen  ?navOpenClass :location.pathname === "/saved-news" && headerMenuDark
            }`}
            type="button"
            onClick={isNavOpen ? onClose : onMenuClick}
          ></button>
        ) : (
          <Navigation
            onSignInClick={onSignInClick}
            onLogOut={onLogOut}
          />
        )}
      </div>
      <MobileNavigation
            isOpen={isNavOpen}
            onSignInClick={onSignInClick}
            onLogOut={onLogOut}
          />
    </header>
  );
}
