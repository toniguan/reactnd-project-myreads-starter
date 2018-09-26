import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import Book from './Book'


class Shelf extends Component{
  render(){
    const { books, shelfTitle, shelfKey } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter((book)=>(book.shelf === shelfKey)).map((book) =>(
              <Book book={book} updateShelf={this.props.updateShelf} />
              ))}
           </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
