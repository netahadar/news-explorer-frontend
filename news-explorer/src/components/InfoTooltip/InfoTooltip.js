import React from "react";

export default function InfoTooltip({name, isOpen, onClose}) {

    return(
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened":''}`} >
          <div className="popup__frame">
            <button className="popup__close-button" type="button" onClick={onClose}></button>
            <h2 className="popup__title">Registration successfully completed!</h2>
            <a className="popup__link" href="/signin">Sign in</a>
          </div>
        </div>
    )
}
