/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import githubPath from "../../images/github.svg";
import facebookPath from "../../images/facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyrights">
          © 2022 Supersite, Powered by News API
        </p>
        <nav className="footer__navigation">
          <div className="footer__links">
            <Link className="footer__link" to="/">
              Home
            </Link>
            <a className="footer__link" href="https://practicum.yandex.com/" target="_blank">
              Practicum by Yandex
            </a>
          </div>
          <div className="footer__icons">
            <a className="footer__icon" href="https://github.com/netahadar" target="_blank">
              <img src={githubPath} alt="github"></img>
            </a>
            <a className="footer__icon" href="https://facebook.com/" target="_blank">
              <img src={facebookPath} alt="facebook"></img>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
