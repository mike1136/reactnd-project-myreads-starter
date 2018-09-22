import React, {
    Component
} from 'react'
import ReactDom from 'react-dom'
class Book extends Component {
  constructor(props){
    super(props)
  }
    state = {
       book:this.props.bookDetails,
       moveBook:this.props.moveToShelf
    }

    render() {
      const {book,moveBook}=this.state;
      
   
      
   

return(
  
  
    <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={((event)=>moveBook(book,event.target.value))}  value={book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      )
                        
}
}

export default Book