import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import BookShelf from'./components/BookShelf.js';

// import PropTypes from 'prop-types';





class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [

                // {
                // "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
                // "shelf" : "Read", //Want to Read, Read, None, Currently Reading
                // "bookTitle": "FirstTitle",
                // "bookAuthor": "1David McCullough"
    ],

    showSearchPage: false
  }

  /*Get the books avaliable on the bookshelf using the BookAPI getAll method*/
  componentWillMount(){  //invoked immediately before the component is inserted into the DOM
    BooksAPI.getAll().then(books=>{
        this.setState({books});
        });
  }

  /*Update the shelf if a shelf selection is changed, if 'none' selected remove that book.*/
  updateShelfForBook = (selectedBook, newShelf)=>{
    //Update book on front end.
    this.setState((prevState)=>({//Internal note: the state will be updated next time react calls render.
        books:  prevState.books.map(book=>{ //Updatebooks to current shelves
                  if(book.id===selectedBook.id)
                    book.shelf = newShelf;
                  return book;
                }).filter(b=>b.shelf!=='none') //remove from list if book selection is 'none'.
    }));
    //Update serverside with change.
    BooksAPI.update(selectedBook, newShelf);
  }

 render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">

                   {/*Start: Book Shelf*/}
                      <div className="list-books-title">
                      <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                      <div>
                            <BookShelf
                              title="Currently Reading"
                              selectedBooks={this.state.books.filter(book=>book.shelf==="currentlyReading")}
                              updateShelfForBook = {this.updateShelfForBook}
                            />
                            <BookShelf
                              title="Want to Read"
                              selectedBooks={this.state.books.filter(book=>book.shelf==="wantToRead")}
                              updateShelfForBook = {this.updateShelfForBook}
                            />
                            <BookShelf
                              title="Read"
                              selectedBooks={this.state.books.filter(book=>book.shelf==="read")}
                              updateShelfForBook = {this.updateShelfForBook}
                            />
                      </div>
                    </div>
                    {/*End: Book Shelf*/}

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}


export default BooksApp

