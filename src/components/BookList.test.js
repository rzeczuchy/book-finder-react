import React from "react";
import BookList from "./BookList";
import BookArticle from "./BookArticle";
import { shallow } from "enzyme";

describe("BookList rendering", () => {
  test("renders article when a book passed", () => {
    const testTitle = "Some title";
    const testBooks = [
      {
        volumeInfo: {
          title: testTitle,
        },
      },
    ];
    const list = shallow(<BookList books={testBooks} />);
    const article = <BookArticle title={testTitle} />;
    expect(list.containsMatchingElement(article)).toBeTruthy();
  });

  test("renders no articles when no books passed", () => {
    const list = shallow(<BookList books={undefined} />);
    expect(list.containsMatchingElement(<BookArticle />)).toEqual(false);
  });
});
