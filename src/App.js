import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import BookShelf from'./components/BookShelf.js';
import Search from './components/Search.js';
// import PropTypes from 'prop-types';




class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [],
    showSearchPage: true,
  }

  /*Get the books avaliable on the bookshelf using the BookAPI getAll method*/
  componentWillMount(){  //invoked immediately before the component is inserted into the DOM
    BooksAPI.getAll().then(books=>{
        this.setState({books});
        });
  }

  //TO DO: Update the book object to include new books choosen

  /*Update the shelf if a shelf selection is changed, if 'none' selected remove that book.*/
 //Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
  updateShelfForBook = (selectedBook, newShelf)=>{
    //Update book on front end.
   //ADD BOOK HERE from bookshelf using .splice(n, 0, selectedBook);
    this.setState((prevState)=>({//Internal note: the state will be updated next time react calls render.
        books:  prevState.books
                  .map(book=>{ //Updatebooks to current shelves
                    if(book.id===selectedBook.id)
                      book.shelf = newShelf;
                    return book;})
                  .filter(b=>b.shelf!=='none') //remove from list if book selection is 'none'.
    }));
    //Update serverside with change.
    BooksAPI.update(selectedBook, newShelf);
    console.log('updated');
  }


 render(){
    return (
      <div className="app">
        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
        {this.state.showSearchPage ?


          <Search
             updateShelfForBook = {this.updateShelfForBook}
          />

         :
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
        }
        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
      </div>
    )
  }
}


export default BooksApp

