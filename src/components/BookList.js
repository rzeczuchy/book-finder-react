import React from "react";
import BookArticle from "./BookArticle";
import { joinArray, shortenString, replaceHttp } from "./helpers";

const getThumbnail = (book) => {
  return typeof book.volumeInfo.imageLinks !== "undefined"
    ? replaceHttp(book.volumeInfo.imageLinks.thumbnail)
    : null;
};

const NoResults = () => {
  return (
    <div className="no-results">
      <p>Your search returned no results.</p>
    </div>
  );
};

const Placeholder = () => {
  return (
    <div className="placeholder">
      <p>Your results will appear here.</p>
    </div>
  )
}

const LoadMoreButton = (props) => {
  return (
    <div className="load-more">
      <button className="btn" type="button" onClick={props.onLoadMore}>Load More</button>
    </div>
  )
}

const ResultsGrid = (props) => {
  return (
    <div className="book-list">
      {props.books.map((book, i) => {
        return (
          <BookArticle
            key={i}
            cover={getThumbnail(book)}
            title={shortenString(book.volumeInfo.title, 100)}
            infoLink={replaceHttp(book.volumeInfo.infoLink)}
            authors={joinArray(book.volumeInfo.authors, 3, "Author unlisted")}
            description={shortenString(book.volumeInfo.description, 160)}
          />)
      })}
    </div>
  );
}

const BookList = (props) => {
  if (Array.isArray(props.books) && props.books.length > 0) {
    return (
      <div>
        <ResultsGrid books={props.books} />
        <LoadMoreButton onLoadMore={props.onLoadMore} />
      </div>
    );
  } else if (Array.isArray(props.books) && props.books.length === 0) {
    return <Placeholder />
  } else {
    return <NoResults />;
  }
};

export default BookList;
