import React, { useState } from "react";

const SearchForm = (props) => {
  const [query, setQuery] = useState({
    title: "",
    publisher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuery(() => {
      return { [name]: value };
    });
  };

  const submitQuery = (e) => {
    e.preventDefault();
    props.onSubmitted(query);
  };

  return (
    <form className="search-form">
      <input
        onChange={handleChange}
        name="title"
        value={query.title}
        placeholder="Enter book title here."
      />
      <button onClick={submitQuery}>Submit</button>
    </form>
  );
};

export default SearchForm;
