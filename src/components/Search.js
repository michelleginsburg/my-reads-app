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

 handleQueryEvent = (query)=>{
 	this.setState({query})
 	this.search(query.trim());
 }

//put these promises in some ordered array and read the 3...
   search = (query) =>{
   	console.log('in function');

    	if(query.length===0){
    		console.log('1')
    		this.setState({searchResults:[]})//FINE WORKS
  		} else {
  				console.log('looking for results')
  					BooksAPI.search(query)
  							.then(results =>{
  								if(!results.error)
  									if(query===this.state.query){
  									console.log('2')
  									this.setState ({searchResults: results});
  								}
  								else{
  									console.log('3')
  									this.setState ({searchResults: []});
  								}
  							})
  							.catch(this.setState ({searchResults: []})
  							);
  		//figure out why it does work for 'asd'
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


  //   searchQuery = (query) =>{
		// //Update the input field
		// this.setState({query})
		// let currentQueryNo = this.state.queryTotal+1;
		// //Increment Query Tracking
		// this.setState(prevState=>{
		// 		prevState.queryTotal++;
		// 		return({queryTotal: prevState.queryTotal})
		// });

	 //    if(query.length>0){
		// 		BooksAPI.search(query).then(results => {
		// 				if (!results.error){
		// 					console.log(currentQueryNo+"###"+this.state.queryTotal)
		// 					if(currentQueryNo===this.state.queryTotal){

		// 								this.setState({searchResults: results});
		// 					}


		// 				}
		// 		});
		//    } else
	 //         this.setState({searchResults:[]});


  // 	}



// searchQuery = (query) =>{
	// 	//Update the input field
	// 	this.setState({query})
	// 	//Store results from multiple queries
	// 	let resultsSummary = [];
	// 	//Clear search results
	//     this.setState({searchResults:[],showBooks: false});


	//     if(query.trim().length>0){

	// 		let queries = query.trim().split(" ");
	// 		let that = this;
	//     	queries.forEach(function(queryWord){
	// 			BooksAPI.search(queryWord).then(results => {
	// 					if (!results.error){
	// 	             			results.map(book => {
	// 	               				if(!book.imageLinks)
	// 	                		 			book.imageLinks = 'undefined';

	// 	                 			return book;
	// 	               			})
	// 							Array.prototype.push.apply(resultsSummary,results);
	// 							that.setState({searchResults: resultsSummary});
	// 	               		}
	// 			});
	//     	});
	//     	this.setState({showBooks: true});

	//     	//


	// 	  } else {
	//         	this.setState({searchResults:[],showBooks: false});

	//       }


 //  	}




   // search = (query) =>{
   //  	if(query.length===0){
  	// 		 this.setState({searchResults:[]});
  	// 	} else {
			// let queries = query.trim().split(" ");
			// //console.log(queries);
			// //increment count
			// let resultsSummary = [];
			// let that = this;
  	// 		queries.forEach(function(queryWord){
  	// 				BooksAPI.search(queryWord).then(results =>{
			// 			if (!results.error){
		 //             		results.map((book,index) => {
		 //             			//if book images are not included then make undefined.
		 //               			if(!book.imageLinks) book.imageLinks = 'undefined';
		 //               			//set as true if current book is in the search results
		 //               			let inBookShelf = that.props.currentBooks.find((b) => b.id === book.id);
		 //               			//if true set with current shelf, else set shelf as 'none'
   //                      		book.shelf = inBookShelf ? that.props.currentBooks[index].shelf : 'none';
		 //                 		return book;
		 //               			});
		 //             		Array.prototype.push.apply(resultsSummary,results);
	 	// 					that.setState({searchResults: resultsSummary});

	 	// 					// console.log("return result:" + queryWord);//DEBUG HERE
	 	// 				}
	 	// 				else if(results.error){
	 	// 					// console.log("return error:" + queryWord);//DEBUG HERE
	 	// 					that.setState({searchResults: []});
	 	// 				}

  	// 				});
  	// 		});
  	// 	}
  	// }
