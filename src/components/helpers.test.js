import { joinArray, shortenString, replaceHttp } from "./helpers";

describe("joinArray method", () => {
  test("joinArray returns a string", () => {
    const arr = ["this", "that", "and this"];
    expect(typeof joinArray(arr, 3, "message") === "string").toBeTruthy();
  });

  test("returns message if passed undefined", () => {
    const testMessage = "test";
    expect(joinArray(undefined, 3, testMessage) === testMessage).toBeTruthy();
  });
});

describe("shortenString method", () => {
  test("indeed shortens string", () => {
    const testString = "Some rather long string to test with.";
    expect(
      shortenString(testString, testString.length / 2).length <
        testString.length
    ).toBeTruthy();
  });
});

describe("replaceHttp method", () => {
  test("doesn't break when weird string passed", () => {
    const testStrings = ["", "test", undefined, "12345"];
    for (const str in testStrings) {
      expect(replaceHttp(str)).toEqual(str);
    }
  });

  test("replaces http correctly", () => {
    const testString = "http://example.com";
    expect(replaceHttp(testString)).toEqual("https://example.com");
  });
});
