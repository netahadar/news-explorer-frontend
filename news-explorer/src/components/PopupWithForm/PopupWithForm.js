import React from "react";
import { Link } from "react-router-dom";
import "./PopupWithForm.css";

export default function PopupWithForm({
  name,
  title,
  buttonTitle,
  linkTitle,
  isOpen,
  onClose,
  onLinkClick,
  onSubmit,
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
          <p className="popup__form-text">
            or<span>&nbsp;</span>
            <Link className="popup__form-link" to="/" onClick={onLinkClick}>
              {linkTitle}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
