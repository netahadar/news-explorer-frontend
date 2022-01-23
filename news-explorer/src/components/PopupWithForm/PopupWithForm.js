import React from "react";
import "./PopupWithForm.css";

export default function PopupWithForm({
  isOpen,
  name,
  onClose,
  onSubmit,
  title,
  buttonTitle,
  linkTitle,
  children,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <h2 className="popup__form-title">{title}</h2>
          {children}
          <button className="popup__form-submit-button" type="submit">
            {buttonTitle}
          </button>
          {/* change next a to link */}
          <p className="popup__form-text">
            or<span>&nbsp;</span>
            <a
              className="popup__form-link"
              href={Location.pathname === "/signin" ? "/signup" : "/signin"}
            >
              {linkTitle}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
