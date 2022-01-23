import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css';

export default function Header({ isLoggedIn, userName }) {
    const darkTextClass = "header__text header__text_theme_dark"
    return(
        <div className="header">
            <div className="header__container">
                {/* TO-DO: change next p to LINK after adding routes */}
                <p className={Location.pathname === "/articles" ?darkTextClass :"header__text"}>NewsExplorer</p>
                <Navigation isLoggedIn= { isLoggedIn } userName={userName}/>
            </div>
        </div>
    )
}