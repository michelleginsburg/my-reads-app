# MyReads React App
By Jeremy Levett

## About
A React application for managing books to read/already read. Similar to Goodreads. 

The bookshelf app allows users to select and categorize books they have read, are currently reading, or want to read. Users can search for books and add books to their bookshelf. Data is persisted by the udacity backend server.

Originally just provided with a static css, html template (no react code). The project was to add interactivity to the app by refactoring it into a usuable react front end application.  There is an API server and client library that is used to persist information as you interact with the application.

Code files that were created/edited for this project include the app.css. index.js, app.js file and all js files in the components directory.

[APP HOSTED HERE. CLICK TO TRY IT OUT!](https://jlevett.github.io/Myreads-App-React/ "Live App Hosted Here")


![Gif](https://github.com/Jlevett/Myreads-App-React/blob/master/myreads.gif)

Udacity Project Reviewer comment: 
_"You've done a really AWESOME job on your project and showed a true understanding of React's fundamentals!"_

## Features (need to make bullet points 
- Display books
- Shelf Update
- Search single or multiple words

## How to Use the App
Books are sorted into three categories: 'Currently Reading', 'Want to Read' and 'Read'
To change a book's category or remove a book from the list, click on the green button on the book cover .
To add new books, click on the green + button at the bottom of the page. 
Enter an author's name or subject in the search bar to find more books.

## Local Installation 
Note: Make sure you have the latest Node.js installed.
1. Navigate to the directory that contains the project.
2. Open up Git Bash in this location.
3. Run 'npm install'.
4. Run 'npm start'.
5. Open http://localhost:3000

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/Jlevett/Myreads-App-React/blob/master/SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Technology
- Reactjs
- JSX
- AJAX
- JavaScript(ECMAScript) 6
- React-router

## Screenshots 

Main Page

![Image of App Desktop Main Page](https://github.com/Jlevett/Myreads-App-React/blob/master/main%20page.png)

Search Page

![Image of App Desktop Search Page](https://github.com/Jlevett/Myreads-App-React/blob/master/search%20page.png)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Jlevett/Myreads-App-React/blob/master/LICENSE) file for details.
