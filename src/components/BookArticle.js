import React from "react";

const BookArticle = (props) => {
  return (
    <>
      <article className="book-article">
        <img
          className="book-cover"
          src={props.cover}
          alt="Book cover"
        ></img>
        <div className="book-details">
          <h1 className="book-title">
            <a href={props.infoLink} rel="noopener noreferrer" target="_blank">
              {props.title}
            </a>
          </h1>
          <p className="book-authors">{props.authors}</p>
          <p className="book-description">{props.description}</p>
        </div>
      </article>
      <hr />
    </>
  );
};

export default BookArticle;
