import React from "react";
import './News.css';
import NewsCardList from "../NewCardList/NewsCardList";

export default function News() {

  return (
    <>
      <h2 className="news__title">Search results</h2>
      <NewsCardList />
      <button
        className="news__show-button"
        type="button"
      >Show more</button>
    </>
  );
}
