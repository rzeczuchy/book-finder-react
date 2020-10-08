import React from "react";

const BookArticle = (props) => {
  return (
    <>
      <article className="book-article">
        <img
          className="book-article__cover"
          src={props.cover}
          alt="Book cover"
        ></img>
        <div className="book-article__details">
          <h1 className="book-article__title">
            <a href={props.infoLink} rel="noopener noreferrer" target="_blank">
              {props.title}
            </a>
          </h1>
          <p className="book-article__authors">{props.authors}</p>
          <p className="book-article__description">{props.description}</p>
        </div>
      </article>
      <hr />
    </>
  );
};

export default BookArticle;
