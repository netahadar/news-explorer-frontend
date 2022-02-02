import React from "react";
import PopupFormInputs from "../PopupFormInputs/PopupFormInputs";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function Login({ isOpen, onClose, onSignUpClick, onSubmit }){

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    let filteredValue = value.replace(/[*|\"<>[\]{}`;&$]+/, " ");     // Disallow special characters to prevent XSS
    setValues({ ...values, [name]: filteredValue });
  }

  function handleSubmit(e) {
    e.preventDefault();     // Prevent the browser from navigating to the form address
    onSubmit( values )    // Pass the values to the external handler
  }

    return (
        <PopupWithForm
          name="signin"
          title="Sign in"
          buttonTitle="Sign in"
          linkTitle="Sign up"
          isOpen={isOpen}
          onClose={onClose}
          onLinkClick={onSignUpClick}
          onSubmit={handleSubmit}
        >
          <PopupFormInputs values={values} handleChange={handleChange}/>
        </PopupWithForm>
      );
    }