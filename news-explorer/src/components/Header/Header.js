import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ isLoggedIn, userName, isMobile }) {
  const darkTextClass = "header__text header__text_theme_dark";
  const navOpenClass = "header__menu header__menu_state_open";
  Location.pathname = "/";

  //For testing:
  const isNavOpen = false;

  return (
    <div className="header">
      <div className="header__container">
        {/* TO-DO: change next p to LINK after adding routes */}
        <p
          className={Location.pathname === "/" ? "header__text" : darkTextClass}
        >
          NewsExplorer
        </p>
        {isMobile ? (
          <button className={ isNavOpen ?navOpenClass :"header__menu"} type="button"></button>
        ) : (
            <Navigation isLoggedIn={isLoggedIn} userName={userName} />
        )}
      </div>
    </div>
  );
}
