import React from "react";
import "./SignupPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupFormInputs from "../PopupFormInputs/PopupFormInputs";

export default function SignupPopup({
  isOpen,
  onClose,
  onSubmit,
  onSignInClick,
}) {

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    name: "",
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
      name="signup"
      title="Sign up"
      buttonTitle="Sign up"
      linkTitle="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLinkClick={onSignInClick}
    >
      <PopupFormInputs values={values} handleChange={handleChange}/>
      <p className="popup__form-input-title">Username</p>
      <input
        className="popup__form-input"
        id="username-input"
        type="text"
        name="name"
        // value={values.name}
        onChange={handleChange}
        placeholder="Enter your username"
        required
      />
      <span id="username-input-error"></span>
      <p className="popup__form-submition-error">This email is not available</p>
    </PopupWithForm>
  );
}
