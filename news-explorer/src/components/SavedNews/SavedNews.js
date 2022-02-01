import React from "react";
import "./SavedNews.css";
import NewsCardList from "../NewCardList/NewsCardList";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function SavedNews({ cards, savedCards }) {

  const currentUser = React.useContext(CurrentUserContext);

  // For tests:
  const keywordsList = ["Nature", "Yellowstone", "word", "another word"]; 
    
  const keywords = keywordsList.slice(0, 2).join(", ");
  const num = keywordsList.length - 2;
  
  return (
    <section className="saved-news">
      <div className="saved-news__caption">
        <p className="saved-news__text">Saved articles</p>
        <h2 className="saved-news__title">
          {currentUser.name}, you have 5 saved articles
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
