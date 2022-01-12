import React from "react";
import Navigation from "../Navigation/Navigation";

export default function Header({ isLoggedIn, userName }) {
    return(
        <div className="header">
            <div className="header__container">
                <p className="header__text">NewsExplorer</p>
                <Navigation isLoggedIn= { isLoggedIn } userName={userName}/>
            </div>
        </div>
    )
}