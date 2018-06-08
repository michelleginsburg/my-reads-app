import React from 'react';
import Book from'./Book.js';
import PropTypes from 'prop-types';

/**
Component BookShelf using stateless functional component
App->BookShelf->Book
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
                		{props.selectedBooks.map((book, index)=>
                			<Book
                                key= {index}
                                book = {book}
                                updateShelfForBook = {props.updateShelfForBook}
                            />
                		)}
                    </ol>
                </div>
            </div>
		)
}

/*Make sure the bookshelf prop is an array or flag an error*/
BookShelf.propTypes = {
  selectedBooks: PropTypes.array.isRequired,
}

export default BookShelf;


