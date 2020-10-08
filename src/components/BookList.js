import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import BookArticle from "./BookArticle";

const shortenDescription = (desc, n) => {
    return typeof desc !== "undefined" && desc.length > n ? desc.substr(0, n - 1) + "..." : desc;
};

const BookList = (props) => {
  return (
    <div className="book-list">
      {props.books.map((book, i) => {
        return (
          <BookArticle
            key={i}
            cover={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            description={shortenDescription(book.volumeInfo.description, 160)}
          />
        );
      })}
    </div>
  );
};

export default BookList;
