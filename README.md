# MyReads- Reading Tracker App

This bookshelf application allows the user to manage and keep track of their reading lists.

### Description

Search for books by clicking green "Plus" button. Add new books to your collections. Manage your books by moving them between three bookshelves.

Application to search book and add them to one of three lists:
1. Currently Reading
2. Want To Read
3. Read

### Installing

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

## Local Installation 
Note: Make sure you have the latest Node.js installed.
1. Navigate to the directory that contains the project.
2. Open up Git Bash in this location.
3. Run 'npm install'.
4. Run 'npm start'.
5. Open http://localhost:3000

## Built with

* [React](https://reactjs.org/) - Text Editor
* [Create React App](https://github.com/facebookincubator/create-react-app) - React scaffolding package
* [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React
* [Atom](https://atom.io) - Text Editor
* [JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Markup Language
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Styling
* [Google Chrome](https://www.google.com/chrome/) - Browser and Debugging Tool


## How to Use the App
Books are sorted into three categories: 'Currently Reading', 'Want to Read' and 'Read'
To change a book's category or remove a book from the list, click on the green button on the book cover .
To add new books, click on the green + button at the bottom of the page. 
Enter an author's name or subject in the search bar to find more books.

## Important Note
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/Jlevett/Myreads-App-React/blob/master/SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributions

Contributions are not allowed for this project.





