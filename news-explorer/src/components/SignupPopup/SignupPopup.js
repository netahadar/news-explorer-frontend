import React from "react";
import "./SignupPopup.css"
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SignupPopup(){
    //For testing:
    const isOpen = false;

    return (
        <PopupWithForm
          name="signup"
          title="Sign up"
          buttonTitle="Sign up"
          linkTitle="Sign in"
          isOpen={isOpen}
        //   onClose={onClose}
        //   onSubmit={handleSubmit}
        >
          <p className="popup__form-input-title">Email</p>
          <input
            className="popup__form-input"
            id="email-input"
            type="email"
            name="email"
            // value={name}
            // onChange={handleNameChange}
            placeholder="Enter email"
            required
          />
          <span id="email-input-error"></span>
          <p className="popup__form-input-title">Password</p>
          <input
            className="popup__form-input"
            id="password-input"
            type="password"
            name="password"
            // value={description}
            // onChange={handleDescriptionChange}
            placeholder="Enter password"
            minLength="8"
            required
          />
          <span id="password-input-error"></span>
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