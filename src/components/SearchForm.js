import React, { useState } from "react";
import { checkIfNonEmptyString } from "./helpers";

const SearchForm = (props) => {
  const [general, setGeneral] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    props.onSubmitted(queryString());
  };

  const queryString = () => {
    var queryArr = [];
    if (checkIfNonEmptyString(general)) {
      queryArr.push(general);
    }
    if (checkIfNonEmptyString(title)) {
      queryArr.push("intitle:" + title);
    }
    if (checkIfNonEmptyString(author)) {
      queryArr.push("inauthor:" + author);
    }
    return queryArr.join("+");
  };

  return (
    <section className="hero">
      <div className="search-area">
        <h1>Search for books:</h1>
        <form className="search-form">
          <input
            onChange={(e) => setGeneral(e.target.value)}
            name="general"
            value={general}
            placeholder="In all fields"
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
            placeholder="In title"
          />
          <input
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
            value={author}
            placeholder="In author"
          />
          <button className="btn" onClick={submitSearch}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
