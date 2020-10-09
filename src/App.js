import React, { useState } from "react";
import { BookList, SearchForm } from "./components";
import "./css/index.css";

const BOOKS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const queryUrl = (queryStr) => {
  var url = "https://www.googleapis.com/books/v1/volumes?q=";
  url += queryStr;
  url += "&maxResults=40";
  url += "&key=";
  url += BOOKS_API_KEY;
  return url;
};

const App = () => {
  const [books, setBooks] = useState([]);

  const onSearch = (query) => {
    const request = new XMLHttpRequest();
    const url = queryUrl(query);
    request.open("GET", url, true);
    request.onload = (e) => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        setBooks(() => {
          return data["items"];
        });
      }
    };
    request.send();
  };

  return (
    <>
      <SearchForm onSubmitted={onSearch} />
      <BookList books={books} />
    </>
  );
};

export default App;
