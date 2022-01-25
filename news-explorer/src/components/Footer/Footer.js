/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import githubPath from "../../images/github.svg";
import facebookPath from "../../images/facebook.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__copyrights">
          © 2022 Supersite, Powered by News API
        </p>
        <div className="footer__navigation">
          <div className="footer__links">
            <Link className="footer__link" to="/">
              Home
            </Link>
            <a className="footer__link" href="https://practicum.yandex.com/">
              Practicum by Yandex
            </a>
          </div>
          <div className="footer__icons">
            <a className="footer__icon" href="https://github.com/netahadar">
              <img src={githubPath} alt="github"></img>
            </a>
            <a className="footer__icon" href="#">
              <img src={facebookPath} alt="facebook"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
