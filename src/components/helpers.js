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

const makeBooksApiQueryUrl = (query, startIndex, maxResults) => {
  var url = "https://www.googleapis.com/books/v1/volumes?q=";
  url += query;
  url += "&startIndex=" + startIndex;
  url += "&maxResults=" + maxResults;
  url += "&key=";
  url += process.env.REACT_APP_GOOGLE_API_KEY;
  return url;
};

export const sendRequest = (query, startIndex, maxResults, onLoad) => {
  const request = new XMLHttpRequest();
  const url = makeBooksApiQueryUrl(query, startIndex, maxResults);
  request.open("GET", url, true);
  request.onload = (e) => {
    onLoad(request);
  }
  request.send();
}

export const requestSuccessful = (request) => {
  return request.readyState === 4 && request.status === 200;
}

export const apiResponseJson = (request) => {
  return JSON.parse(request.response);
}