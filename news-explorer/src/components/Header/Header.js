import React from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import {
  DARK_TEXT_CLASS,
  NAV_OPEN_CLASS,
  HEADER_MENU_DARK_CLASS,
} from "../../utils/constants";
import "./Header.css";

export default function Header({
  isMobile,
  onSignInClick,
  onMenuClick,
  onClose,
  isNavOpen,
  onLogOut,
}) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <Link
          className={`${
            isNavOpen
              ? "header__text"
              : location.pathname === "/"
              ? "header__text"
              : DARK_TEXT_CLASS
          }`}
          to="/"
        >
          NewsExplorer
        </Link>
        {isMobile ? (
          <button
            className={`header__menu ${
              isNavOpen
                ? NAV_OPEN_CLASS
                : location.pathname === "/saved-news" && HEADER_MENU_DARK_CLASS
            }`}
            type="button"
            onClick={isNavOpen ? onClose : onMenuClick}
          ></button>
        ) : (
          <Navigation onSignInClick={onSignInClick} onLogOut={onLogOut} />
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
