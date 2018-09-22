import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    booksAPIQuery:[],
    showSearchPage: false
  }
  updateState = () => {
    BooksAPI.getAll().then((queryBooks) => {
      this.setState({ queryBooks })
      console.log('State is updated: ', this.state.queryBooks)
    }).catch((error) => {
      console.log(error)
    })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      console.log('response: ', response)
      this.updateState()
    }).catch((error) => {
      console.log(error)
    })
  }

  updateBookShelfFromSearchPage = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      console.log('response 2: ', response)
      this.updateState()
    }).catch((error) => {
      console.log(error)
    })
    this.props.history.push('/')
  }

   componentDidMount() {
    BooksAPI.getAll().then((booksAPIQuery) => {

      this.setState({ booksAPIQuery })
      console.log(booksAPIQuery);
    }).catch((error) => {
      console.log(error)
    })}

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Route exact path='/' render={
            ()=> 
            ( <Home 
            booksAPIQuery = {this.state}
            moveToShelf={this.updateBookShelf}

            />
            
            )
            
          }
          
            />     
        )}

      </div>
    )
  }
}

export default BooksApp
