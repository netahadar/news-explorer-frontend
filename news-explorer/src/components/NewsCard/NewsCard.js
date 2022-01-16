import React from "react";

export default function NewsCard({ card }) {

  const { image, date, title, text, source } = card;
  
  return (
    <li className="news__item">
      <button
        className="news__save-button"
        type="button"
        aria-label="save button"
      ></button>
      {/* TODO: add login state for the next div */}
      <div className="news__tooltip">
        <p className="news__tooltip-text">Sign in to save articles</p>
      </div>
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
