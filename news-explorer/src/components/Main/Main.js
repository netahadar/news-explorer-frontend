import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import backgroundPath from "../../images/searchFormBackground.png";

export default function Main() {
  return (
    <section>
      <div
        className="search"
        style={{ backgroundImage: `url("${backgroundPath}")` }}
      >
        <SearchForm />
      </div>
    </section>
  );
}
