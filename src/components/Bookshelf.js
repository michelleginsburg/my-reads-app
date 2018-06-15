//External Dependencies
import React from "react";
import PropTypes from "prop-types";
//Our Dependencies
import Book from"./Book.js";

/**
*Component BookShelf using stateless functional component
*App->BookShelf->Book
*/
function BookShelf(props){
	return (
    	<div className="bookshelf">
            <h2 className="bookshelf-title">
                {props.title}
            </h2>
            <div className="bookshelf-books">
            	<ol className="books-grid">
            		{/*List each book component out using map function*/}
                    {props.selectedBooks.map(book => (
                        <Book
                            key={book.id}
                            book={book}
                            updateShelfForBook={props.updateShelfForBook}
                        />
                     ))}
                </ol>
            </div>
        </div>
	)
}

//Flag an error if prop is incorrect type
BookShelf.propTypes = {
  selectedBooks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateShelfForBook: PropTypes.func.isRequired
}

export default BookShelf;

