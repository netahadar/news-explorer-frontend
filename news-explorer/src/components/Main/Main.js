import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import backgroundPath from "../../images/searchFormBackground.png";
import About from "../About/About";

export default function Main() {
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
      <section className="about">
        <About />
      </section>
    </>
  );
}
