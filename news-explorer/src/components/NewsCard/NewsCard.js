import React from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { LoggedInContext } from "../../context/LoggdInContext";
import {
  SAVE_BUTTON_CLASS,
  DELETE_BUTTON_CLASS,
  TOOLTIP_SAVED_CLASS,
  ACTIVE_SAVE_BUTTON_CLASS,
} from "../../utils/constants";
import "./NewsCard.css";

export default function NewsCard({ card, onSave,  savedCards = []}) {
  const { description, publishedAt, source, title, urlToImage, keyword="nature" } = card;

  const location = useLocation();

  const loggedIn = React.useContext(LoggedInContext);

  function getMonthName(month) {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("en-US", { month: "long" });
    return monthName;
  }

  const dateList = publishedAt.replace(/T[0-9]+:[0-9]+:[0-9]+Z/, "").split("-"); //Remove time stamp from date
  const month = getMonthName(dateList[1]); //Convert month from number to name
  const date = `${month} ${dateList[2]}, ${dateList[0]}`;   //Display date according to design

  const isSaved = savedCards.includes(card);

  function handleCardSave(e) {
    e.target.classList.add(ACTIVE_SAVE_BUTTON_CLASS);
    onSave(card);
  }

  return (
    <li className="news__item">
      <button
        className={`
          ${location.pathname === "/" ? SAVE_BUTTON_CLASS : DELETE_BUTTON_CLASS}
          ${location.pathname === "/" && isSaved ? ACTIVE_SAVE_BUTTON_CLASS :undefined}
        `}
        type="button"
        aria-label="card button"
        disabled={loggedIn ? false : true}
        onClick={handleCardSave}
      ></button>
      <div
        className={
          !loggedIn
            ? "news__tooltip"
            : location.pathname === "/saved-news"
            ? TOOLTIP_SAVED_CLASS
            : undefined
        }
      >
        {!loggedIn ? (
          <p className="news__tooltip-text">Sign in to save articles</p>
        ) : (
          location.pathname === "/saved-news" && (
            <p className="news__tooltip-text">Remove from saved</p>
          )
        )}
      </div>
      {location.pathname === "/saved-news" && (
        <div className="news__keyword-container">
          <p className="news__keyword">{keyword}</p>
        </div>
      )}
      <div
        className="news__image"
        style={{ backgroundImage: `url(${urlToImage})` }}
      />
      <div className="news__item-description">
        <p className="news__item-date">{date}</p>
        <h3 className="news__item-title">{title}</h3>
        <p className="news__item-text">{description}</p>
        <p className="news__item-source">{source.name.toUpperCase()}</p>
      </div>
    </li>
  );
}
