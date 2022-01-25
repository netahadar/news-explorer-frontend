import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";


export default function NewsCardList({ cards, savedCards }) {
    //For testing:
    Location.path = '/'; 

    return(
        <ul className="news__list">
          {Location.path === '/' ? cards.slice(0, 3).map((card) => {
            return (
              <NewsCard
                card={card}
                key={card.keyword}
              />
            );
          })
        : savedCards.map((card) => {
          return (
            <NewsCard
              card={card}
              key={card.keyword}
            />
          );
        })
      }
        </ul>
    )
}