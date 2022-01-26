import React from "react";
import PopupFormInputs from "../PopupFormInputs/PopupFormInputs";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SigninPopup({ isOpen, onClose, onSignUpClick }){

    return (
        <PopupWithForm
          name="signin"
          title="Sign in"
          buttonTitle="Sign in"
          linkTitle="Sign up"
          isOpen={isOpen}
          onClose={onClose}
          onLinkClick={onSignUpClick}
          // onSubmit={handleSubmit}
        >
          <PopupFormInputs />
        </PopupWithForm>
      );
    }