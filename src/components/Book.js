import React from 'react';
import PropTypes from 'prop-types';
/**
Component Book using stateless functional component
App->BookShelf->Book
*/
function Book(props){
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={
                {
                width: 128,
                height: 193,
                backgroundImage: `url(${props.book.imageLinks.thumbnail})`
                }
              }></div>
              <div className="book-shelf-changer">
                {/*onChange: updateShelfForBook @ app.js to update book with new book shelf value*/}
                <select
                  value = {props.book.shelf}
                  onChange =  {(event) =>props.updateShelfForBook(props.book, event.target.value)}>
                  <option value="None" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            {/*Map over each author and display them*/}
            {props.book.authors.map((author, index)=>(
              <div className="book-authors" key ={index}>{author}</div>
            ))}
          </div>
        </li>
    )
}

/*Make sure the book prop is an object or flag an error*/
Book.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Book;