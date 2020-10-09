import React from "react";
import BookArticle from "./BookArticle";
import { shallow } from "enzyme";

describe("BookArticle rendering", () => {
  test("fields render correctly", () => {
    const testTitle = "This is a test title.";
    const testAuthors = "Test author.";
    const testDescription = "This is a test description.";

    const article = shallow(
      <BookArticle
        title={testTitle}
        authors={testAuthors}
        description={testDescription}
      />
    );

    const title = (
      <h1>
        <a>{testTitle}</a>
      </h1>
    );
    const authors = <p>{testAuthors}</p>;
    const description = <p>{testDescription}</p>;

    expect(article.containsMatchingElement(title)).toBeTruthy();
    expect(article.containsMatchingElement(authors)).toBeTruthy();
    expect(article.containsMatchingElement(description)).toBeTruthy();
  });
});
