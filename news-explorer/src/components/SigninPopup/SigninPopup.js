import React from "react";
import PopupFormInputs from "../PopupFormInputs/PopupFormInputs";
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
          <PopupFormInputs />
        </PopupWithForm>
      );
    }