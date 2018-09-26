import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import Shelf from '../Shelf'
import BookSearch from './SearchPage'


class MainPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      books : []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then( response =>{
      this.setState({books:response})
    })
  }

  updateShelf = (book, shelf)=>{
    BooksAPI.update(book, shelf).then(response =>{
      book.shelf = shelf;

      this.setState(state =>{{
        books: {this.state.books.filter(b=>b.id===book.id).concat([book])}
      }})//setState
      console.log(this.state.books.filter(b => b.id=== book.id))
    })//then

  }
  render(){
    const catalogs = [
      {title : 'Currently Reading',
       key : 'currentlyReading'
      },
      {title : 'Want to Read',
       key : 'wantToRead'
      },
      {title : 'Read',
       key : 'read'
     }]
    this.state.books.sort(sortBy('title'))
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {catalogs.map((shelf)=>(
                <Shelf
                  books={this.state.books}
                  shelfTitle={shelf.title}
                  shelfKey={shelf.key}
                  updateShelf={this.updateShelf} />
              ))}
            </div>
           </div>
           <div className="open-search">
            <Link to="/search">Add a book</Link>
           </div>
          </div>
    )
  }
}
export default MainPage
