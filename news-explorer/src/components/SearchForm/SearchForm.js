import React from "react";
import "./SearchForm.css";

export default function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = React.useState("");

  function handleKeywordChange(e) {
    // eslint-disable-next-line no-useless-escape
    const filteredValue = e.target.value.replace(/[*|\"<>[\]{}`;&$]+/, " "); // Disallow special characters to prevent XSS
    setKeyword(filteredValue);
    localStorage.setItem('keyword', filteredValue) //Save keyword to local storage for retriving after refreshing the page
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword);
  }

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <h1 className="search__form-title">What's going on in the world?</h1>
      <p className="search__form-text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search__form-container">
        <input
          className="search__form-input"
          name="keyword"
          placeholder="Enter topic"
          onChange={handleKeywordChange}
          required
        ></input>
        <button className="search__form-submit" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
