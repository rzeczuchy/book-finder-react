export const checkIfNonEmptyString = (checked) => {
  return typeof checked === "string" && checked !== "";
};

export const shortenString = (desc, n) => {
  return typeof desc !== "undefined" && desc.length > n
    ? desc.substr(0, n - 1) + "[...]"
    : desc;
};

export const joinArray = (arr, maxValues, undefMessage) => {
  if (Array.isArray(arr)) {
    if (arr.length > maxValues) {
      return arr.slice(0, maxValues).join(", ") + "[...]";
    }
    return arr.join(", ");
  }
  return undefMessage;
};

export const replaceHttp = (url) => {
  return typeof url === "string" ? url.replace(/^http:\/\//i, "https://") : "";
};
