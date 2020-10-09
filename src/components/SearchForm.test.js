import React from "react";
import SearchForm from "./SearchForm";
import { shallow } from "enzyme";

describe("SearchForm rendering", () => {
  test("inputs render", () => {
    const form = shallow(<SearchForm />);
    const titleInput = <input name="title" />;
    const authorInput = <input name="author" />;
    expect(form.containsMatchingElement(titleInput)).toBeTruthy();
    expect(form.containsMatchingElement(authorInput)).toBeTruthy();
  });

  test("submit button renders", () => {
    const form = shallow(<SearchForm />);
    const searchButton = <button>Submit</button>;
    expect(form.containsMatchingElement(searchButton)).toBeTruthy();
  });
});
