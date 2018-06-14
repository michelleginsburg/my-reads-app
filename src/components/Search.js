import { Link } from 'react-router-dom'


import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
// import PropTypes from 'prop-types';

//Using a controlled component: This is a component which renders a form,// NOT NECESSARY
// but the source of truth for that form state lives inside of the component state rather than inside the DOM.

//Issues
//1.a) As the user types into the search field, books that
//match the query are displayed on the page.



class Search extends Component {

	state = {
		searchResults: [],
		query: ''
	}

//TO DO:
//1. Cannot filter results book.title.toLowerCase().includes(query[0].toLowerCase()))
//2. Books should be selected as none by default unless they are in the current bookshelf
		//this.props.books. vs this.state.searchResults.
//3.  Invalid queries are handled and prior search results are not shown.
//4.Search results on the search page allow the user to select
//“currently reading”, “want to read”, or “read” to place the book in a certain shelf.

// 	//if book images are not included then make undefined.
// 	if(!book.imageLinks) book.imageLinks = 'undefined';
// 	//set as true if current book is in the search results
// 	let inBookShelf = that.props.currentBooks.find((b) => b.id === book.id);
// 	//if true set with current shelf, else set shelf as 'none'
// 	book.shelf = inBookShelf ? that.props.currentBooks[index].shelf : 'none';
// 	return book;


 handleQueryEvent = (query)=>{
 	this.setState({query})
 	this.search(query);
 }
/**
*Search function that takes a query and updates the
*booksearch results array state with recieved books.
*/
search = (query) =>{
	//Since it is a new query set the results screen to blank.
	this.setState({searchResults:[]})
	//If the query length is not zero.
	if(query.length!==0){
		let individualQuery = query.split(" ");
		let that = this;
		//will hold the search results for the query.
		let resultsSummary = [];
		//For each query (and if multiple) do the following
		individualQuery.forEach((thisQuery)=>{
			//trim the query so no spaces one either side
			thisQuery = thisQuery.trim();
			//If Query is not white spaces and does a length>0 ie actually a letter or word.
			if(thisQuery.length !== 0 && thisQuery.indexOf(' ') !== 0  ){
				//Call API search with the trimmed query
				BooksAPI.search(thisQuery)
						.then(results =>{
							/*This line means that the book search results
							of the latest query value (in input field)
							are displayed and no other async requests for
							previous query values (in input) are
							displayed if they resolve later.
							It also does not display anything if there is
							an error in the results*/
							if(!results.error && query===this.state.query){
									//Add the results for the single query and add to the array
									Array.prototype.push.apply(resultsSummary,results);
									that.setState ({searchResults: resultsSummary});
								}
						})
			}
		});
		}
  	}

  	render() {
	    return (
		 	<div className="search-books">
	 	        <div className="search-books-bar">
	 	            <Link className="close-search" to ="/"></Link>



	 	            <div className="search-books-input-wrapper">
		                <form>
	 	            		<input
	 	            			type="text"
	 	            			placeholder="Search by title or author"
	 	            			onChange = {event=>this.handleQueryEvent(event.target.value)}
	 	            			value = {this.state.query}
	 	            		/>
	 	            	</form>
		            </div>
		        </div>
		    	<div className="search-books-results">
		    		{/*List each book component out using map function*/}
		            <ol className="books-grid">
		             { this.state.searchResults.map(book => (
		                  <Book
		             	    book={book}
		              	    key={book.id}
		              	    updateShelfForBook = {this.props.updateShelfForBook}
		                  />
		              	))
		            }
		            </ol>
	 	  		</div>
	 	    </div>
	    )
  }
}

export default Search;
