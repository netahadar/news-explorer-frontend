import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";


export default function NewsCardList({cards, savedCards}) {
    //For testing:
    Location.path = '/saved'; //'/main'

    return(
        <ul className="news__list">
          {Location.path === 'main' ? cards.slice(0, 3).map((card) => {
            return (
              <NewsCard
                card={card}
                key={card._id}
              />
            );
          })
        : savedCards.map((card) => {
          return (
            <NewsCard
              card={card}
              key={card._id}
            />
          );
        })
      }
        </ul>
    )
}