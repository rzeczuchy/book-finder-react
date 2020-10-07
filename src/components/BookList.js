import React from "react";
import BookArticle from "./BookArticle";

const BookList = (props) => {
  return (
    <div className="book-list">
      {props.books.map((book, i) => {
        return (
          <BookArticle
            key={i}
            id={i}
            cover={book.cover}
            title={book.title}
            description={book.description}
          />
        );
      })}
    </div>
  );
};

export default BookList;
