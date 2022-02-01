import React from "react";

export default function PopupFormInputs({ values, handleChange }) {

  return (
    <>
      <p className="popup__form-input-title">Email</p>
      <input
        className="popup__form-input"
        id="email-input"
        type="email"
        name="email"
        // value={values.email}
        onChange={handleChange}
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
        // value={values.password}
        onChange={handleChange}
        placeholder="Enter password"
        minLength="8"
        required
      />
      <span id="password-input-error"></span>
    </>
  );
}
