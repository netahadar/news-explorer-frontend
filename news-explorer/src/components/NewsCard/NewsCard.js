import React from "react";
import "./NewsCard.css";

export default function NewsCard({ card }) {
  const { image, date, title, text, source, keyword } = card;
  const saveButtonClass = "news__card-button news__card-button_type_save";
  const deleteButtonClass = "news__card-button news__card-button_type_delete";
  const tooltipSavedClass = "news__tooltip news__tooltip_theme_saved";

  return (
    <li className="news__item">
      <button
        className={
          Location.pathname === "/" ? saveButtonClass : deleteButtonClass
        }
        type="button"
        aria-label="card button"
      ></button>
      {/* TODO: add login state for the next div */}
      <div
        className={
          Location.pathname === "/" ? "news__tooltip" : tooltipSavedClass
        }
      >
        <p className="news__tooltip-text">
          {Location.pathname === "/"
            ? "Sign in to save articles"
            : "Remove from saved"}
        </p>
      </div>
      {Location.pathname === "/saved-news" && (
        <div className="news__keyword-container">
          <p className="news__keyword">{keyword}</p>
        </div>
      )}
      <div
        className="news__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="news__item-description">
        <p className="news__item-date">{date}</p>
        <h3 className="news__item-title">{title}</h3>
        <p className="news__item-text">{text}</p>
        <p className="news__item-source">{source}</p>
      </div>
    </li>
  );
}
