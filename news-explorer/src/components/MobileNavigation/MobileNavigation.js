import React from "react";
import Navigation from "../Navigation/Navigation";
import "./MobileNavigation.css";

export default function MobileNavigation({ name, isOpen, isLoggedIn, userName }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__navigation-container">
        <Navigation isLoggedIn={isLoggedIn} userName={userName}/>
      </div>
    </div>
  );
}
