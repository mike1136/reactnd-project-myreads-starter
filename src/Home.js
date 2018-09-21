import React, {Component} from 'react'
import Bookshelf from './Bookshelf'

class Home extends Component{
render(){
return(

<div className="list-books">
<div className="list-books-title">
  <h1>BookLog</h1>
</div>
<div className="list-books-content">
  <div>

     <Bookshelf name={"Currently Reading"}/>
     <Bookshelf name={"Want to Read"}/>
     <Bookshelf name={"Read"}/>
  </div>
</div>
<div className="open-search">
  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
</div>
</div>
)}
}
export default Home
