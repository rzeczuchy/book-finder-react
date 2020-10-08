import React from "react";

const BookArticle = (props) => {
  return (
    <article className="book-article">
      <img
        className="book-article__cover"
        src={props.cover}
        alt="Book cover"
      ></img>
      <div className="book-article__details">
        <h1 className="book-article__title">{props.title}</h1>
        <p className="book-article__description">{props.description}</p>
      </div>
    </article>
  );
};

export default BookArticle;
