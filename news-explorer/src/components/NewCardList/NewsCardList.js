import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";
import { useLocation } from "react-router-dom";


export default function NewsCardList({ cards, savedCards, index, onSave }) {

  const location = useLocation();

  return(
        <ul className="news__list">
          {location.pathname === '/' ? cards.slice(0, index).map((card) => {
            return (
              <NewsCard
                card={card}
                key={cards.indexOf(card)}
                onSave={onSave}
                savedCards={savedCards}
              />
            );
          })
        : savedCards.map((card) => {
          return (
            <NewsCard
              card={card}
              key={savedCards.indexOf(card)}
              onSave={onSave}
            />
          );
        })
      }
        </ul>
    )
}