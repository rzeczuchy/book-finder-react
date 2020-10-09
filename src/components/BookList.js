import React from "react";
import BookArticle from "./BookArticle";
import LazyLoad from "react-lazyload";

const shortenDescription = (desc, n) => {
  return typeof desc !== "undefined" && desc.length > n
    ? desc.substr(0, n - 1) + "..."
    : desc;
};

const joinAuthors = (authors) => {
  return Array.isArray(authors) ? authors.join(", ") : "Unlisted";
};

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
                title={book.volumeInfo.title}
                infoLink={book.volumeInfo.infoLink}
                authors={joinAuthors(book.volumeInfo.authors)}
                description={shortenDescription(
                  book.volumeInfo.description,
                  160
                )}
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
