import React from "react";
import PopupFormInputs from "../PopupFormInputs/PopupFormInputs";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useForm } from "../useForm/useForm";

export default function Login({
  isOpen,
  onClose,
  onSignUpClick,
  onSubmit,
  isError,
  resError,
}) {
  const { values, handleChange, errors, isValid,resetForm } = useForm();

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from navigating to the form address
    onSubmit(values, resetForm); // Pass the values to the external handler
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
      isValid={isValid}
      isError={isError}
      resError={resError}
    >
      <PopupFormInputs
        values={values}
        errors={errors}
        handleChange={handleChange}
      />
    </PopupWithForm>
  );
}
