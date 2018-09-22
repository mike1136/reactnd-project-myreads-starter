import React, {Component} from 'react'
import Bookshelf from './Bookshelf'

class Home extends Component{
  constructor(props)
  {
    super(props);
  
  }
  
render(){
  let {booksAPIQuery}=this.props.booksAPIQuery;
  const moveToShelf=this.props.moveToShelf;
         console.log(moveToShelf);
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
  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
</div>
</div>
)}
}
export default Home
