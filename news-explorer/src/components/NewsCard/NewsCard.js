import React from "react";
import { useLocation } from "react-router-dom";
import { LoggedInContext } from "../../context/LoggdInContext";
import { SAVEBUTTONCLASS,
  DELETEBUTTONCLASS,
  TOOLTIPSAVEDCLASS } from '../../constants';
import "./NewsCard.css";

export default function NewsCard({ card, keyword = "nature" }) {
  const { description, publishedAt, source, title, urlToImage } = card;

  const location = useLocation();

  const loggedIn = React.useContext(LoggedInContext);

  function getMonthName(month){
    const d = new Date();
    d.setMonth(month-1);
    const monthName = d.toLocaleString("en-US", {month: "long"});
    return monthName;
  }

  const dateList = publishedAt.replace(/T[0-9]+:[0-9]+:[0-9]+Z/, "").split('-')
  const month = getMonthName(dateList[1]);
  const date = `${month} ${dateList[2]}, ${dateList[0]}`;

  return (
    <li className="news__item">
      <button
        className={
          location.pathname === "/" ? SAVEBUTTONCLASS : DELETEBUTTONCLASS
        }
        type="button"
        aria-label="card button"
      ></button>
      <div
        className={
          !loggedIn
            ? "news__tooltip"
            : location.pathname === "/saved-news" ?TOOLTIPSAVEDCLASS :undefined
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
