import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import BookSearch from './BookSearch'


class BookShelf extends Component{
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then( (books) =>{
      this.setState({books})
    })
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
                  shelfKey={shelf.key} />
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
export default BookShelf
