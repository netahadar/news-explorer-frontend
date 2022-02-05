import React from "react";
import { Link } from "react-router-dom";
import {
  FORM_SUBMIT_BUTTON_CLASS,
  INACTIVE_FORM_SUBMIT_BUTTON_CLASS,
} from "../../utils/constants";
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
  isValid = false,
  isError,
  resError
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
          <span
            className={
              isError ? "popup__form-submit-error" : undefined
            }
          >
            {resError}
          </span>
          <button
            className={
              isValid
                ? FORM_SUBMIT_BUTTON_CLASS
                : INACTIVE_FORM_SUBMIT_BUTTON_CLASS
            }
            type="submit"
            disabled={isValid ? false : true}
          >
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
