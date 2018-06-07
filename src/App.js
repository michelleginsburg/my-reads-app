import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import BookShelf from'./components/BookShelf.js';

import PropTypes from 'prop-types';





class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [
                {
                "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
                "shelf" : "Read", //Want to Read, Read, None, Currently Reading
                "bookTitle": "FirstTitle",
                "bookAuthor": "1David McCullough"
                },
                {
                "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
                "shelf" : "Want to Read", //Want to Read, Read, None, Currently Reading
                "bookTitle": "SecondTitle",
                "bookAuthor": "2David McCullough"
                },
                {
                "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
                "shelf" : "Want to Read", //Want to Read, Read, None, Currently Reading
                "bookTitle": "ThirdTitle",
                "bookAuthor": "3dddaaad"
                },
                {
                "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
                "shelf" : "Currently Reading", //Want to Read, Read, None, Currently Reading
                "bookTitle": "ForthTitle",
                "bookAuthor": "4David McCullough"
                }
              ],
    showSearchPage: false
  }
  //Update the shelf if a selection for shelf of a book is changed.
  updateShelfForBook = (book, newShelf)=>{
    this.setState((previousState)=>({
    books: previousState.books.map((b)=>{
       if(b.bookTitle===book.bookTitle)
           b.shelf = newShelf;
      return b;
    })
   }))
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
                              selectedBooks={this.state.books.filter(book=>book.shelf==="Currently Reading")}
                              updateShelfForBook = {this.updateShelfForBook}
                            />
                            <BookShelf
                              title="Want to Read"
                              selectedBooks={this.state.books.filter(book=>book.shelf==="Want to Read")}
                              updateShelfForBook = {this.updateShelfForBook}
                            />
                            <BookShelf
                              title="Read"
                              selectedBooks={this.state.books.filter(book=>book.shelf==="Read")}
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


