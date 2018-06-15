//External Dependencies
import { Link } from "react-router-dom"
import React, { Component } from "react";
import PropTypes from "prop-types";
import  sortBy from "sort-by";
//Our Dependencies
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

/**
*Component "Search" using ES6 class component
*App->Search
*/
class Search extends Component {
	//Flag an error if prop is incorrect type
  	static propTypes = {
   			currentBooks: PropTypes.array.isRequired,
   			updateShelfForBook: PropTypes.func.isRequired
  	}

	state = {
		searchResults: [],
		query: "",
		invalid: false
	}

	/**
	*Event triggered if input field changed.
	*/
	handleQueryEvent = (query)=>{
		this.setState({invalid:false})
		this.setState({query:query})
		this.search(query);
	}

	/**
	*Search function that takes a query and updates the
	*booksearch results array state with recieved books.
	*/
	search = (query) =>{
		//Set Time out for an invalid query (Conditions: Latest query && query length is >0 && zero search results after 3 seconds)
		setTimeout(() => {
			(query === this.state.query && query.length >0 && this.state.searchResults.length === 0)
				? this.setState({invalid:true}):this.setState({invalid:false});
		}, 3000);
		//Since it is a new query set the results screen to blank.
		this.setState({searchResults:[]})
		//If the query length is not zero.
		if(query.length !== 0) {
			let individualQuery = query.split(" ");
			individualQuery.push(query);
			//Add in multiple word search as well.
			//For example search for "artificial intelligence"
			//will look for ["artificial", "intelligence", "artificial intelligence"]
			let that = this;
			//Will hold the search results for the query.
			let resultsSummary = [];
			//For each query (and if multiple) do the following
			individualQuery.forEach(thisQuery=> {
				//trim the query so no spaces one either side
				thisQuery = thisQuery.trim();
				//If Query is not white spaces and does a length>0 ie actually a letter or word.
				if(thisQuery.length !== 0 && thisQuery.indexOf(" ") !== 0  ) {
					//Call API search with the trimmed query
					BooksAPI.search(thisQuery).then(results => {
						/*This line means that the book search results
						of the latest query value (in input field)
						are displayed and no other async requests for
						previous query values (in input) are
						displayed if they resolve later.
						It also does not display anything if there is
						an error in the results*/
						if(!results.error && query === this.state.query) {

							let modifiedResults = results.map(bookResult => {
								//All book results should have a shelf property of undefined
								bookResult.shelf = "undefined"
								//if book images are not included then make undefined.
								if(!bookResult.imageLinks) bookResult.imageLinks = "undefined";
								//set as true if book in bookshelf is in the search results
								let inBookShelf = that.props.currentBooks.some(bookInShelf => bookInShelf.id === bookResult.id);
								//if book is in shelf set to searched book to shelf if not set to shelf property to none.
								bookResult.shelf =
									inBookShelf ? that.props.currentBooks.find(bookInShelf=>bookInShelf.id === bookResult.id).shelf : "none";
								return bookResult;
							});
							//Remove any duplicate search results
							that.state.searchResults.forEach(book => {
								modifiedResults = modifiedResults.filter(b => b.id !== book.id);
							});
							//Add the modifedresults to the resultsSummary
							Array.prototype.push.apply(resultsSummary, modifiedResults);
							that.setState ({searchResults: resultsSummary});
						}
					})
				}
			});
		}
	}

  	render() {
  		//Sort the results by their title.
  		let sortedSearchResults = this.state.searchResults;
  		sortedSearchResults.sort(sortBy("title"))

	    return (
		 	<div className="search-books">
	 	        <div className="search-books-bar">
	 	            <Link className="close-search" to ="/"></Link>
	 	            <div className="search-books-input-wrapper">
		                <form>
	 	            		<input
	 	            			type="text"
	 	            			placeholder="Search by title or author"
	 	            			onChange = {event => this.handleQueryEvent(event.target.value)}
	 	            			value = {this.state.query}
	 	            		/>
	 	            	</form>
		            </div>
		        </div>
		    	<div className="search-books-results">
		    		{/*If invalid result then display messsage to user*/}
		    		{this.state.invalid && <h2>Invalid Query: No search results found</h2>}
		    		{/*List each book component out using map function*/}
		            <ol className="books-grid">
		             	{sortedSearchResults.map(book => (
		                	<Book
		             	    	book={book}
		              	    	key={book.id}
		              	    	updateShelfForBook={this.props.updateShelfForBook}
		                 	/>
		            	))}
		            </ol>
	 	  		</div>
	 	    </div>
	    )
	}
}

export default Search;
//)