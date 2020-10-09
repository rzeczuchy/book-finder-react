import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App rendering", () => {
  test("app renders (sanity check)", () => {
    shallow(<App />);
  });
});
