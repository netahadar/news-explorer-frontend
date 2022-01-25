import React from "react";
import "./InfoTooltip.css";

export default function InfoTooltip({
  name,
  isOpen,
  onClose,
  isMobile,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      {isMobile && (
        <button
          className="popup__close-button"
          type="button"
          // onClick={onClose}
        ></button>
      )}
      <div className="popup__frame">
        {!isMobile && (
          <button
            className="popup__close-button"
            type="button"
            // onClick={onClose}
          ></button>
        )}

        <h2 className="popup__title">Registration successfully completed!</h2>
        <a className="popup__link" href="/signin">
          Sign in
        </a>
      </div>
    </div>
  );
}
