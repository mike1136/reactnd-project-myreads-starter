import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
/**
 * Renders the search page
 */
class SearchPage extends Component {
constructor(props)
{
  super(props)
  this.state={
    booksQuery: [],
    query: '',
    
  }

}

  searchForBooks = (event) => {
    // Makes sure there's something on the input field
    if(event.target.value.length > 0) {
      BooksAPI.search(event.target.value).then((response) => {
        //If nothing is found set the query to undefined
        if(response.hasOwnProperty('error')) {
          this.setState({ booksQuery: undefined })
        } else {
          //Gets the query if there is no error
          let shelvedBooks = this.props.apiBooks

          // Loops and set the shelf to none
          for(let book of response) {
            book.shelf = 'none'
          }
          for(let book of response) {
        
            for(let shelvedBook of shelvedBooks) {
            //If the book is already used then set the shelf to it
              if(shelvedBook.id === book.id) {
                book.shelf = shelvedBook.shelf
              }
            }
          }
          //Updates the Books Query
          this.setState({ booksQuery: response})
        }
      }).catch((error) => {
        console.log('error: ', error)
      })
    } else {
      this.setState({ booksQuery: undefined })
    }
  }

  updateQuery = (event) => {
    let query = event.target.value
    this.setState({ query })
    this.searchForBooks(event)    
  }

  //Prevent form submittion
  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const moveToShelf=this.props.moveToShelf;
  
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <form onSubmit={this.handleSubmit} className='search-for-a-book'>
              <input
                type='text'
                placeholder='Search by title'
                name='apiQuery'
                value={this.state.query}
                onChange={(event) => this.updateQuery(event)}
              />
            </form>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.booksQuery !== undefined ? (
                this.state.booksQuery.hasOwnProperty('error') ? (
                  <li >
                    <p >Sorry, we couldn't find the book you're looking</p>
                  </li>
                ) : (
                  this.state.booksQuery.map((book) => (
                    <li key={book.id}>
                    <Book bookDetails={book} moveToShelf={moveToShelf} />
                   </li>
                  ))
                )
            ) : (
              <li >
                <p >Sorry, we couldn't find the book you're looking.</p>
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}
export default withRouter(SearchPage)