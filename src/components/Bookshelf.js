import React from 'react';
import Book from'./Book.js';

//Stateless Functional Component
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
                			<Book key= {index} book = {book}/>
                		)}
                    </ol>
                </div>
            </div>
		)
}
export default BookShelf;


