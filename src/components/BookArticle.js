import React from "react";

const BookArticle = (props) => {
  return (
    <article className="book-article">
      <img
        class="book-article__cover"
        src="{props.cover}"
        alt="Book cover"
      ></img>
      <div class="book-article__details">
        <h1 class="book-article__title">{props.title}</h1>
        <p class="book-article__description">{props.description}</p>
      </div>
    </article>
  );
};

export default BookArticle;
