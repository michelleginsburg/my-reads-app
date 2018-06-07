import React from 'react';
import PropTypes from 'prop-types';

function Book(props){
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={
                {
                width: 128,
                height: 193,
                backgroundImage: `url(${props.book.backgroundImage})`
                }
              }></div>
              <div className="book-shelf-changer">
                <select
                  value = {props.book.shelf}
                  onChange =  {(event) =>props.updateShelfForBook(props.book, event.target.value)}
                >
                  <option value="None" disabled>Move to...</option>
                  <option value="Currently Reading">Currently Reading</option>
                  <option value="Want to Read">Want to Read</option>
                  <option value="Read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{props.book.bookTitle}</div>
            <div className="book-authors">{props.book.bookAuthor}</div>
          </div>
        </li>
    )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Book;


//onClick={()=>props.onDeleteContact()}