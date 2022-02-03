import React from "react";
import { useLocation } from "react-router-dom";
import { LoggedInContext } from "../../context/LoggdInContext";
import {
  SAVE_BUTTON_CLASS,
  DELETE_BUTTON_CLASS,
  TOOLTIP_SAVED_CLASS,
  ACTIVE_SAVE_BUTTON_CLASS,
} from "../../utils/constants";
import "./NewsCard.css";

export default function NewsCard({ card, onCardButtonClick, savedCards }) {

  const {
    description=card.text,
    publishedAt=card.date,
    source,
    title,
    urlToImage=card.image,
    keyword,
    link=card.url,
  } = card;

  const location = useLocation();

  const loggedIn = React.useContext(LoggedInContext);

  //Convert date's month from number to name
  function getMonthName(month) {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("en-US", { month: "long" });
    return monthName;
  }

  const dateList = publishedAt.replace(/T[0-9]+:[0-9]+:[0-9]+Z/, "").split("-"); //Remove time stamp from date
  const month = getMonthName(dateList[1]); 
  const date = `${month} ${dateList[2]}, ${dateList[0]}`; //Display date according to design

  function checkForSavedCards() {
    // eslint-disable-next-line array-callback-return
    return savedCards.find((savedCard) => {
      // Chack if card is on savedCards list
      if (savedCard.title === card.title) {
        return true;
      }
    });
  }

  const isSaved = checkForSavedCards(); //Check if card is saved on render

  function handleCardButtonClick(e) {
    const isSavedCard = checkForSavedCards();

    if (isSavedCard) {
      card = isSavedCard; //Set card from matching result on savedCards to enable delete on search result block
    }
    
    e.target.classList.toggle(ACTIVE_SAVE_BUTTON_CLASS);

    onCardButtonClick(card, isSaved);
  }

  return (
    <li className="news__item">
      <button
        className={`
          ${location.pathname === "/" ? SAVE_BUTTON_CLASS : DELETE_BUTTON_CLASS}
          ${
            location.pathname === "/" && isSaved
              ? ACTIVE_SAVE_BUTTON_CLASS
              : undefined
          }
        `}
        type="button"
        aria-label="card button"
        disabled={loggedIn ? false : true}
        onClick={handleCardButtonClick}
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
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a className="news__article-link" href={link} target="_blank">
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
        <p className="news__item-source">{source.name ? source.name.toUpperCase() :source.toUpperCase()}</p>
      </div>
      </a>
    </li>
  );
}
