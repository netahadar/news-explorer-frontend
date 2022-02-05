import React from "react";
import "./Register.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupFormInputs from "../PopupFormInputs/PopupFormInputs";
import { useForm } from '../useForm/useForm';


export default function Register({
  isOpen,
  onClose,
  onSubmit,
  onSignInClick,
  isError,
  resError
}) {


  const { values, handleChange, errors, isValid, resetForm } = useForm();
  function handleSubmit(e) {
    e.preventDefault();     // Prevent the browser from navigating to the form address
    onSubmit( values )    // Pass the values to the external handler
    resetForm();
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
      isValid={isValid}
      isError={isError}
      resError={resError}
    >
      <PopupFormInputs values={values} errors={errors} handleChange={handleChange}/>
      <p className="popup__form-input-title">Username</p>
      <input
        className="popup__form-input"
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter your username"
        required
      />
      <span className={errors.name ? 'popup__form-input-error_active' : undefined}>{errors.name}</span>
      <p className="popup__form-submition-error">This user name is not available</p>
    </PopupWithForm>
  );
}
