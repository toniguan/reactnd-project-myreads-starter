import React, {Component} from 'react'

class Book extends Component{
  render(){
    const {book, updateShelf, currentShelf} = this.props
    let thumbnail = book.imageLinks? book.imageLinks.thumbnail : '' // query = 'biography''tim'
    let authors = this.props.book.authors? this.props.book.authors.join(' & ') : 'No Author...' // query = 'poetry'
    return (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193,
                backgroundImage: `url(${thumbnail})`
                }}></div>
                <div className="book-shelf-changer">
                  <select
                    value = {currentShelf}
                    onChange={ e => {updateShelf(book, e.target.value)}}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{authors}</div>
          </div>
    )
  }
}

export default Book
