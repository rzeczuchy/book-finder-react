# book-finder-react

The book-finder-react sample is a React app which searches for volumes in the Google Books API.

See live here: https://boring-darwin-0dc906.netlify.app/

## Tech used

Frontend: React, JS, SCSS \
Testing: Jest, Enzyme

## Starting up

Clone the repository and open the root folder.

Install dependencies using `npm install` .

Start the app using `npm start` .

Run tests using `npm test` .

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Read full guide [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).

## Updating dependencies

Dependencies in the project should be kept up to date. To update all dependencies run:

```
npm i -g npm-check-updates
ncu -u
npm install
```

## Unit tests

The application is unit tested with Jest and Enzyme. All .js files aside from index.js should have over 80% test coverage.

To check test coverage for all files, run:

```
npm test -- --coverage --watchAll=false
```
