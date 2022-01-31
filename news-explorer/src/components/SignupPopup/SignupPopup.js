import React from "react";
import "./SignupPopup.css"
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupFormInputs from "../PopupFormInputs/PopupFormInputs";

export default function SignupPopup({ isOpen, onClose, onSubmit, onSignInClick }){

    return (
        <PopupWithForm
          name="signup"
          title="Sign up"
          buttonTitle="Sign up"
          linkTitle="Sign in"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={onSubmit}
          onLinkClick={onSignInClick}
        >
          <PopupFormInputs />
          <p className="popup__form-input-title">Username</p>
          <input
            className="popup__form-input"
            id="username-input"
            type="text"
            name="username"
            // value={name}
            // onChange={handleNameChange}
            placeholder="Enter your username"
            required
          />
          <span id="username-input-error"></span>
          <p className="popup__form-submition-error">This email is not available</p>
        </PopupWithForm>
      );
    }