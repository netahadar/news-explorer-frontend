import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SigninPopup(){
    //For testing:
    const isOpen = false;

    return (
        <PopupWithForm
          name="signin"
          title="Sign in"
          buttonTitle="Sign in"
          linkTitle="Sign up"
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
        </PopupWithForm>
      );
    }