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

const sendRequest = (query, onLoad) => {
  const request = new XMLHttpRequest();
  const url = queryUrl(query);
  request.open("GET", url, true);
  request.onload = (e) => {
    onLoad(request);
  }
  request.send();
}

const requestSuccessful = (request) => {
  return request.readyState === 4 && request.status === 200;
}

const apiResponseJson = (request) => {
  return JSON.parse(request.response);
}

const App = () => {
  const [books, setBooks] = useState([]);

  const onSearch = (query) => {
    queryStr = "";
    startIndex = 0;
    const onLoad = (request) => {
      if (requestSuccessful(request)) {
        setBooks(() => {
          return apiResponseJson(request)["items"];
        });
      }
    };
    sendRequest(query, onLoad);
  };

  const onLoadMore = () => {
    startIndex += maxResults;
    const onLoad = (request) => {
      if (requestSuccessful(request)) {
        setBooks(() => {
          return books.concat(apiResponseJson(request)["items"]);
        });
      }
    };
    sendRequest(queryStr, onLoad);
  }

  return (
    <>
      <SearchForm onSubmitted={onSearch} />
      <BookList books={books} onLoadMore={onLoadMore} />
    </>
  );
};

export default App;
