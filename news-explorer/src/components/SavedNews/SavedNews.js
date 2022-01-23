import React from "react";
import "./SavedNews.css";
import NewsCardList from "../NewCardList/NewsCardList";

export default function SavedNews({ cards, savedCards, userName }) {
  // For tests:
  const keywordsList = ["Nature", "Yellowstone", "word", "another word"]; //TO-DO: at stage 3 will be taken from API
  const keywords = keywordsList.slice(0, 2).join(", ");
  const num = keywordsList.length - 2;
  return (
    <section className="saved-news">
      <div className="saved-news__caption">
        <p className="saved-news__text">Saved articles</p>
        <h2 className="saved-news__title">
          {userName}, you have 5 saved articles
        </h2>
        <p className="saved-news__keywords">
          By keywords:
          <span>&nbsp;</span>
          <span className="saved-news__keywords-span">
             {keywords}, and {num} other
          </span>
        </p>
      </div>
      <div className="saved-news__container">
        <NewsCardList cards={cards} savedCards={savedCards} />
      </div>
    </section>
  );
}
