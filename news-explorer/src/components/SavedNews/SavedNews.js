import React from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function SavedNews({ cards, savedCards, onCardButtonClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  //Create a list of all articles keywords
  let initialKeywordsList = [];
  for (const obj of savedCards){
    initialKeywordsList.push(obj.keyword);
  }
  // Count keywords occurrence and add to object
  const keywordCount = initialKeywordsList.reduce(function(previous, current) {
    previous[current] = (previous[current] || 0) + 1;
    return previous;
  }, {});;
  //Sort keywords list by num of occurence
  const keywordsList = Object.keys(keywordCount).sort(function(a, b) {
    return keywordCount[b] - keywordCount[a];
  });;
  
  const firstKeywords = //Choose keywords to display
    keywordsList.length <= 3
      ? keywordsList.slice(0, 3)
      : keywordsList.slice(0, 2);
  const keywords = firstKeywords.join(", ");
  const num = keywordsList.length - firstKeywords.length;

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
              {keywords}
              {num > 0 ? `, and ${num} other` : ""}
            </span>
          )}
        </p>
      </div>
      <div className="saved-news__container">
        <NewsCardList
          cards={cards}
          savedCards={savedCards}
          onCardButtonClick={onCardButtonClick}
        />
      </div>
    </section>
  );
}
