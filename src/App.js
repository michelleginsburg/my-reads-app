import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelf from'./components/Bookshelf.js'






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



  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                  <BookShelf
                    title="Currently Reading"
                    selectedBooks={this.state.books.filter(book=>book.shelf==="Currently Reading")}
                  />
                  <BookShelf
                    title="Want to Read"
                    selectedBooks={this.state.books.filter(book=>book.shelf==="Want to Read")}
                  />
                  <BookShelf
                    title="Read"
                    selectedBooks={this.state.books.filter(book=>book.shelf==="Read")}
                  />

            </div>
          </div>
        </div>
    </div>
    )
  };
}

export default BooksApp
