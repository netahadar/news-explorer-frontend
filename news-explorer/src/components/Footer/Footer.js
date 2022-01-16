/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import githubPath from "../../images/github.svg";
import facebookPath from "../../images/facebook.svg";

export default function Footer() {
    return(
    <section className="footer">
        <div className="footer__container">
            <p className="footer__copyrights">© 2022 Supersite, Powered by News API</p>
            <div className="footer__links">
                <a className="footer__link" href="#">Home</a>
                <a className="footer__link" href="#">Practicum by Yandex</a>
                <a href="#"><img className="footer__icon" src={githubPath} alt="github"></img></a>
                <a href="#"><img className="footer__icon" src={facebookPath} alt="facebook"></img></a>
            </div>
        </div>
    </section>
    )
}