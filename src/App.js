import React from "react";
import { BookList } from "./components";
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

const App = (props) => {
  return (
    <>
      <BookList books={books} />
    </>
  );
};

export default App;
