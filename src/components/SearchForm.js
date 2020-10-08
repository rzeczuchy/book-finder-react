import React, { useState } from "react";

const SearchForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    props.onSubmitted(queryString());
  };

  const queryString = () => {
    var str = "";
    if (typeof title !== "undefined") {
      str += title;
    }
    if (typeof author !== "undefined" && author !== "") {
      str += "+inauthor:" + author;
    }
    return str;
  };

  return (
    <section className="hero">
      <div className="search-area">
        <h1>Search for books:</h1>
        <form className="search-form">
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
            placeholder="Title or part of a title."
          />
          <input
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
            value={author}
            placeholder="Author name or part of a name."
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
