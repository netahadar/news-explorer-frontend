import React from "react";
import NewsCardList from "../NewCardList/NewsCardList";

export default function SavedNews({cards, savedCards}){
    // For tests:
    const keywordsList = ["Nature", "Yellowstone", "word", "another word"]; //TO-DO: at stage 3 will be taken from API
    const keywords = keywordsList.slice(0, 2).join(', ');
    const num = keywordsList.length - 2;
    return(
        <section className="saved-news">
            <p className="saved-news__text">Saved articles</p>
            <h2 className="saved-news__title">Elise, you have 5 saved articles</h2>
            <p className="saved-news__keywords">By keywords: {keywords}, and {num} other</p>
            <div className="saved-news__container">
                <NewsCardList cards={cards} savedCards={savedCards} />
            </div>
        </section>
    )
}