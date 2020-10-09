import { joinArray, shortenString } from "./helpers";

describe("joinArray method", () => {
  test("joinArray returns a string", () => {
    const arr = ["this", "that", "and this"];
    expect(typeof joinArray(arr, 3, "message") === "string").toBeTruthy();
  });

  test("joinArray returns message if passed undefined", () => {
    const testMessage = "test";
    expect(joinArray(undefined, 3, testMessage) === testMessage).toBeTruthy();
  });
});

describe("shortenString method", () => {
  test("shortenString indeed shortens string", () => {
    const testString = "Some rather long string to test with.";
    expect(shortenString(testString, testString.length / 2).length < testString.length).toBeTruthy();
  });
});
