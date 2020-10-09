import React from "react";
import BookArticle from "./BookArticle";
import { joinArray, shortenString } from "./helpers";
import LazyLoad from "react-lazyload";

const getThumbnail = (book) => {
  return typeof book.volumeInfo.imageLinks !== "undefined"
    ? book.volumeInfo.imageLinks.thumbnail
    : null;
};

const LoadingMessage = () => {
  return (
    <div className="loading-message">
      <p>Loading...</p>
    </div>
  );
};

const BookList = (props) => {
  if (Array.isArray(props.books)) {
    console.log(props.books);
    return (
      <div className="book-list">
        {props.books.map((book, i) => {
          return (
            <LazyLoad key={i} placeholder={<LoadingMessage />}>
              <BookArticle
                key={i}
                cover={getThumbnail(book)}
                title={shortenString(book.volumeInfo.title, 100)}
                infoLink={book.volumeInfo.infoLink}
                authors={joinArray(book.volumeInfo.authors, 5, "Not listed")}
                description={shortenString(book.volumeInfo.description, 160)}
              />
            </LazyLoad>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default BookList;
