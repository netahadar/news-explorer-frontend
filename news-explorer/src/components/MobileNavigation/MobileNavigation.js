import React from "react";
import Navigation from "../Navigation/Navigation";
import "./MobileNavigation.css";

export default function MobileNavigation({ isOpen, onSignInClick }) {
  return (
    <div className={`popup popup_type_nav ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__navigation-container">
        <Navigation onSignInClick={onSignInClick} />
      </div>
    </div>
  );
}
