import React from 'react';

//Stateless Functional Component
function BookShelf(props){
		return (
        	<div className="bookshelf">
                <h2 className="bookshelf-title">
                	{props.title}
                </h2>
                <div className="bookshelf-books">
                	<ol className="books-grid">
                      {/*Enter Book Component here via filter*/}
                    </ol>
                </div>
            </div>
		)
}
export default BookShelf;
