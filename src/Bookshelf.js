import React,{Component} from 'react'
import Book from './Book'
/**
 *Individual bookshelf.Organize the books.
 *
 * @class BookShelf
 * @extends {Component}
 */
class BookShelf extends Component
{
    render(){
        const {name,books,moveToShelf}=this.props
        
        return(
<div className="bookshelf">
                  <h2 className="bookshelf-title">{name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book) =>
                      <li key={book.id}>
                      <Book bookDetails={book} moveToShelf={moveToShelf} /> 
                      </li>)
                      }
                    </ol>
                  </div>
                </div>)
}}
export default BookShelf