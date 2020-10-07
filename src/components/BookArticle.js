import React from "react";

const BookArticle = (props) => {
  return (
    <article className="book">
      <img src="{props.cover}" alt="Book cover"></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </article>
  );
};

export default BookArticle;
