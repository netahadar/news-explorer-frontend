import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import News from "../News/News";

export default function Main({ cards, savedCards, onSearch, isNewsOpen }) {
  return (
    <>
      <section className="search">
        <div className="search__container">
          <SearchForm onSearch={onSearch} />
        </div>
      </section>
      {/* <section className="circle-preloader">
        <Preloader />
      </section> */}
      {cards.length === 0 && isNewsOpen &&(
        <section className="not-found">
          <NotFound />
        </section>
      )}
      {cards.length !== 0 && isNewsOpen && (
        <section className="news">
          <News cards={cards} savedCards={savedCards} />
        </section>
      )}
      <section className="about">
        <About />
      </section>
    </>
  );
}
