import React, { useState } from "react";
import { BookList, SearchForm } from "./components";
import "./css/index.css";

const BOOKS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

let queryStr = "";
let startIndex = 0;
const maxResults = 10;

const queryUrl = (query) => {
  var url = "https://www.googleapis.com/books/v1/volumes?q=";
  url += query;
  url += "&startIndex=" + startIndex;
  url += "&maxResults=" + maxResults;
  url += "&key=";
  url += BOOKS_API_KEY;
  queryStr = query;
  return url;
};

const App = () => {
  const [books, setBooks] = useState([]);

  const onSearch = (query) => {
    queryStr = "";
    startIndex = 0;
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

  const onLoadMore = () => {
    console.log("loading more");
    startIndex += maxResults;
    const request = new XMLHttpRequest();
    const url = queryUrl(queryStr);
    request.open("GET", url, true);
    request.onload = (e) => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        setBooks(() => {
          return books.concat(data["items"]);
        });
      }
    };
    request.send();
  }

  return (
    <>
      <SearchForm onSubmitted={onSearch} />
      <BookList books={books} onLoadMore={onLoadMore} />
    </>
  );
};

export default App;
