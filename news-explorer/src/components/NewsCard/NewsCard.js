import React from "react";
import { useLocation } from "react-router-dom";
import { LoggedInContext } from "../../context/LoggdInContext";
import "./NewsCard.css";

export default function NewsCard({ card, keyword = "nature" }) {
  const { description, publishedAt, source, title, urlToImage } = card;

  const location = useLocation();

  const loggedIn = React.useContext(LoggedInContext);

  const saveButtonClass = "news__card-button news__card-button_type_save";
  // const activeSaveButtonClass = "news__card-button news__card-button_active";
  const deleteButtonClass = "news__card-button news__card-button_type_delete";
  const tooltipSavedClass = "news__tooltip news__tooltip_theme_saved";

  return (
    <li className="news__item">
      <button
        className={
          location.pathname === "/" ? saveButtonClass : deleteButtonClass
        }
        type="button"
        aria-label="card button"
      ></button>
      <div
        className={
          !loggedIn
            ? "news__tooltip"
            : location.pathname === "/saved-news" ?tooltipSavedClass :undefined
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
        <p className="news__item-date">{publishedAt}</p>
        <h3 className="news__item-title">{title}</h3>
        <p className="news__item-text">{description}</p>
        <p className="news__item-source">{source.name}</p>
      </div>
    </li>
  );
}
