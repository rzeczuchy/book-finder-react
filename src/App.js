import React, { useState } from "react";
import { BookList, SearchForm } from "./components";
import { sendRequest, requestSuccessful, apiResponseJson } from "./components/helpers.js";
import "./css/index.css";

const App = () => {
  const maxResults = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [cachedQuery, setCachedQuery] = useState("");
  const [books, setBooks] = useState([]);

  const onSearch = (query) => {
    setStartIndex(() => {
      return 0;
    });
    const onLoad = (request) => {
      if (requestSuccessful(request)) {
        setBooks(() => {
          return apiResponseJson(request)["items"];
        });
        setCachedQuery(() => {
          return query;
        });
      }
    };
    sendRequest(query, startIndex, maxResults, onLoad);
  };

  const onLoadMore = () => {
    setStartIndex(() => {
      return startIndex + maxResults;
    });
    const onLoad = (request) => {
      if (requestSuccessful(request)) {
        setBooks(() => {
          return books.concat(apiResponseJson(request)["items"]);
        });
      }
    };
    sendRequest(cachedQuery, startIndex, maxResults, onLoad);
  }

  return (
    <>
      <SearchForm onSubmitted={onSearch} />
      <BookList books={books} onLoadMore={onLoadMore} />
    </>
  );
};

export default App;
