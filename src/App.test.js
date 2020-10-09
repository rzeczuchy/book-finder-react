import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { BookList, SearchForm } from "./components";

describe("App", () => {
  test("app renders (sanity check)", () => {
    shallow(<App />);
  });
});

describe("SearchForm", () => {
  test("search form renders inputs", () => {
    const form = shallow(<SearchForm />);
    const titleInput = <input name="title" />;
    const authorInput = <input name="author" />;
    expect(form.containsMatchingElement(titleInput)).toBeTruthy();
    expect(form.containsMatchingElement(authorInput)).toBeTruthy();
  });

  test("search form renders submit button", () => {
    const form = shallow(<SearchForm />);
    const searchButton = <button>Submit</button>;
    expect(form.containsMatchingElement(searchButton)).toBeTruthy();
  });
});
