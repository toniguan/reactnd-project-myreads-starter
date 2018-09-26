import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import ShelfChanger from './ShelfChanger'

class Book extends Component{
  render(){
    const {book, updateShelf} = this.props
    return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193,
                backgroundImage: `url(${book.imageLinks&&book.imageLinks.thumbnail || ""})`
                }}></div>
                <div className="book-shelf-changer">
                  <select defaultValue = {book.shelf || "none"} onChange={(e) => {updateShelf(book,e.target.value)}}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors || "No author"}</div>
          </div>
        </li>
    )
  }
}

export default Book
