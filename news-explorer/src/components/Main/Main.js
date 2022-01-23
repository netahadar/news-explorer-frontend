import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import backgroundPath from "../../images/searchFormBackground.png";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import News from "../News/News";

export default function Main({isLoggedIn, cards, savedCards}) {
  return (
    <>
      <section className="search">
        <div
          className="search__container"
          style={{ backgroundImage: `url("${backgroundPath}")` }}
        >
          <SearchForm />
        </div>
      </section>
      {/* <section className="circle-preloader">
        <Preloader />
      </section> */}
      {/* <section className="not-found">
        <NotFound />
      </section> */}
      {/* <section className="news">
        <News cards={cards} savedCards={savedCards}/>
      </section> */}
      <section className="about">
        <About />
      </section>
    </>
  );
}
