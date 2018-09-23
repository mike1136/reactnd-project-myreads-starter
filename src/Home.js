import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class Home extends Component{
 
  
render(){
  let {booksAPIQuery}=this.props.booksAPIQuery;
  const moveToShelf=this.props.moveToShelf;
return(

<div className="list-books">
<div className="list-books-title">
  <h1>BookLog</h1>
</div>
<div className="list-books-content">
  <div>
{
  console.log ()
};
     <Bookshelf moveToShelf={moveToShelf} name={"Currently Reading"}  books={booksAPIQuery.filter(book=>book.shelf === 'currentlyReading')}/>
     <Bookshelf moveToShelf={moveToShelf} name={"Want to Read"} books={booksAPIQuery.filter(book=>book.shelf === 'wantToRead')}/>
     <Bookshelf moveToShelf={moveToShelf} name={"Read"}  books={booksAPIQuery.filter(book=>book.shelf === 'read')}/>
    
  </div>
</div>
<div className="open-search">
<Link
            to='/search'
          >Add a book</Link>
</div>
</div>
)}
}
export default Home
