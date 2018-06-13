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
		query: '',
		showBooks: true
	}




    searchQuery = (query) =>{
		//Update the input field
		this.setState({query})
		//Store results from multiple queries
		let resultsSummary = [];

	    //Get rid of white spaces on query, seperate string into words
	    if(query.trim().length>0){
			let queries = query.trim().split(" ");
			let that = this;
	    	queries.forEach(function(queryWord){

				BooksAPI.search(queryWord).then(results => {
						if (!results.error){
		             			results.map(book => {
		               				if(!book.imageLinks)
		                		 			book.imageLinks = 'undefined';
		                 			return book;
		               			});
								Array.prototype.push.apply(resultsSummary,results);
								that.setState({searchResults: resultsSummary});
		               		}
				});
	    	});
	    	this.setState({showBooks: true});
		  } else {
	        	this.setState({searchResults:[],showBooks: false});
	        	console.log('as');
	      }
  	}


  	render() {
	    return (
		 	<div className="search-books">
	 	        <div className="search-books-bar">
	 	            {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
	 	            <div className="search-books-input-wrapper">
		                <form>
	 	            		<input
	 	            			type="text"
	 	            			placeholder="Search by title or author"
	 	            			onChange = {event=>this.searchQuery(event.target.value)}
	 	            			value = {this.state.query}
	 	            		/>
	 	            	</form>
		            </div>
		        </div>
		    	<div className="search-books-results">
		    		{/*List each book component out using map function*/}
		            <ol className="books-grid">
		            {this.state.showBooks &&
		              this.state.searchResults.map(book => (
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

// searchQuerya = (query) =>{
// 		this.setState({query})
// 		let trimmedQuery = query.trim();

// 		let resultsSummary = [];
// 	    if(trimmedQuery.length>0){
// 	        BooksAPI.search(trimmedQuery)
// 	          .then(results => {
// 	            if (!results.error){
// 	               //If book does not have thumbnail then make as undefined.
// 	            	results.map(book => {
// 	              		if(!book.imageLinks)
// 	               		 	book.imageLinks = 'undefined';
// 	                	return book;
// 	              	})
// 	            	;
// 	            	Array.prototype.push.apply(resultsSummary,results);
// 	            	this.setState({searchResults:resultsSummary})//
// 	            	console.log(this.state.searchResults)
// 	            }
// 	          })
// 	          //this.setState({searchResults:resultsSummary});
// 	          this.setState({showBooks: true});
// 	    }
// 	    else{
// 	        this.setState({searchResults:[],showBooks: false });

// 	    }
// }