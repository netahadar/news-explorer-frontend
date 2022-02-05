import React from "react";

export default function PopupFormInputs({ values, errors, handleChange }) {

  return (
    <>
      <p className="popup__form-input-title">Email</p>
      <input
        className="popup__form-input"
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Enter email"
        required
      />
      <span className={errors.email ? 'popup__form-input-error_active' : undefined}>{errors.email}</span>
      <p className="popup__form-input-title">Password</p>
      <input
        className="popup__form-input"
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password"
        minLength="8"
        required
      />
      <span className={errors.password ? 'popup__form-input-error_active' : undefined}>{errors.password}</span>
    </>
  );
}
