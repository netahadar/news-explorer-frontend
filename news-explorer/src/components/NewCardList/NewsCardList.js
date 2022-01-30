import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";
import { useLocation } from "react-router-dom";


export default function NewsCardList({ cards, savedCards }) {

  const location = useLocation();

  return(
        <ul className="news__list">
          {location.pathname === '/' ? cards.slice(0, 3).map((card) => {
            return (
              <NewsCard
                card={card}
                key={card.title}
              />
            );
          })
        : savedCards.map((card) => {
          return (
            <NewsCard
              card={card}
              key={card.title}
            />
          );
        })
      }
        </ul>
    )
}