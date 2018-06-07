import React, { Component } from 'react'
import BookShelf from'./components/Bookshelf.js'

import * as BooksAPI from './BooksAPI'
import './App.css'


//Move into state later on.
const books = [
            {
            "width" :128,
            "height" : 193,
            "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
            "status" : "Currently Reading", //Want to Read, Read, None, Currently Reading
            "book-title": "1776 Big Ones",
            "book-author": "David McCullough"
            },
            {
            "width" :128,
            "height" : 193,
            "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
            "status" : "Currently Reading", //Want to Read, Read, None, Currently Reading
            "book-title": "1776 Big Ones",
            "book-author": "David McCullough"
            },
            {
            "width" :128,
            "height" : 193,
            "backgroundImage" : "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
            "status" : "Currently Reading", //Want to Read, Read, None, Currently Reading
            "book-title": "1776 Big Ones",
            "book-author": "David McCullough"
            },
]


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
                  <BookShelf title="Currently reading"/>
                  <BookShelf title="Want to Read"/>
                  <BookShelf title="Read"/>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default BooksApp
