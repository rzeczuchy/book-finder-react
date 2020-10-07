import React, { useState } from "react";
import { BookList, SearchForm } from "./components";
import "./css/index.css";

const BOOKS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const getBooks = () => [
  {
    cover: null,
    title: "book1",
    description: "book1 desc",
  },
  {
    cover: null,
    title: "book2",
    description: "book2 desc",
  },
];

const App = () => {
  const [books, setBooks] = useState(getBooks());

  const onSearch = (query) => {
    setBooks(() => {
      // return books from the API response here
      console.log(query);
      return getBooks();
    });
  };

  return (
    <>
      <SearchForm onSubmitted={onSearch} />
      <BookList books={books} />
    </>
  );
};

export default App;
