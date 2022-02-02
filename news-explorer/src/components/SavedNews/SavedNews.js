import React from "react";
import "./SavedNews.css";
import NewsCardList from "../NewCardList/NewsCardList";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function SavedNews({ cards, savedCards }) {
  const currentUser = React.useContext(CurrentUserContext);

  let keywordsList = [];
  for (const obj of savedCards) {
    if (!keywordsList.includes(obj.keyword)) {
      keywordsList.push(obj.keyword);
    }
  }

  const keywords = keywordsList.slice(0, 2).join(", ");
  const num = keywordsList.length - 2;

  return (
    <section className="saved-news">
      <div className="saved-news__caption">
        <p className="saved-news__text">Saved articles</p>
        <h2 className="saved-news__title">
          {currentUser.name}, you have {savedCards.length} saved articles
        </h2>
        <p className="saved-news__keywords">
          By keywords:
          <span>&nbsp;</span>
          {keywordsList.length > 0 && (
            <span className="saved-news__keywords-span">
              {keywords}, and {num} other
            </span>
          )}
        </p>
      </div>
      <div className="saved-news__container">
        <NewsCardList cards={cards} savedCards={savedCards} />
      </div>
    </section>
  );
}
