import React, { useState } from "react";

const SearchForm = () => {
  return (
    <div className="search-form">
      <label>Title:</label>
      <input type="text" />
      <label>Publisher:</label>
      <input type="text" />
    </div>
  );
};

export default SearchForm;
