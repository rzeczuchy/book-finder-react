import React, { Component } from "react";
import { BookList, SearchForm } from "./components";
import "./css/index.css";

const books = [
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

class App extends Component {
  render() {
    return (
      <>
        <SearchForm />
        <BookList books={books} />
      </>
    );
  }
}

export default App;
