import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";
import { useLocation } from "react-router-dom";


export default function NewsCardList({ cards, savedCards, index, onSave }) {

  const location = useLocation();

  let newSavedCards = [];
  for (const obj of savedCards) { 
      const newCard = {  //Rename the keys to match them to NewsCard component's rendering
        description: obj.text,
        publishedAt: obj.date,
        source: { name: obj.source },
        title: obj.title,
        urlToImage: obj.image,
        keyword: obj.keyword,
      };
      newSavedCards.push(newCard)
    }
  
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
        : newSavedCards.map((card) => {
          return (
            <NewsCard
              card={card}
              key={newSavedCards.indexOf(card)}
              onSave={onSave}
            />
          );
        })
      }
        </ul>
    )
}