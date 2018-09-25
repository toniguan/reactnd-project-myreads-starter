import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import ShelfChanger from './ShelfChanger'


class Shelf extends Component{
  render(){
    const { books, shelfTitle, shelfKey } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.filter((book)=>(book.shelf == shelfKey)).map((book) =>(
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}></div>
                  <ShelfChanger />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
            ))}
           </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
