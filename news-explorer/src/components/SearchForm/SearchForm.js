import React from "react";

export default function SearchForm() {
  return (
    <form className="search__form">
      <h1 className="search__form-title">What's going on in the world?</h1>
      <p className="search__form-text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search__form-container">
        <input className="search__form-input" name="keyword"  placeholder="Enter topic" required></input>
        <button className="search__form-submit" type="submit">Search</button>
      </div>
    </form>
  );
}
