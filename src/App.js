import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    booksAPIQuery:[],
    showSearchPage: false
  }
  //Upstate the state of the app
  updateState = () => {
    BooksAPI.getAll().then((booksAPIQuery) => {
      this.setState({ booksAPIQuery })
    }).catch((error) => {
      console.log(error)
    })
  }
//Updates the bookShelf
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateState()
    }).catch((error) => {
      console.log(error)
    })
  }
//Updates the bookShelf and refresh
  updateBookShelfFromSearchPage = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateState()
    }).catch((error) => {
      console.log(error)
    })
    this.props.history.push('/')
  }
//Loads the query after the component loads
   componentDidMount() {
    BooksAPI.getAll().then((booksAPIQuery) => {

      this.setState({ booksAPIQuery })
    }).catch((error) => {
      console.log(error)
    })}

  render() {
    return (
      <div className="app">
        
        
          <Route exact path='/' render={
            ()=> 
            ( <Home 
              booksAPIQuery = {this.state}
              moveToShelf={this.updateBookShelf}
             />           
            )}
          
            />  

        )}
   <Route
          path='/search' render={() => (
            <SearchPage
              moveToShelf={this.updateBookShelfFromSearchPage}
              apiBooks={this.state.booksAPIQuery}
            />
        )}/>
      </div>
    )
  }
}

export default withRouter(BooksApp)
