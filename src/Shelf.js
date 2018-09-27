import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component{
  render(){
    const { books, shelfTitle, shelfKey, updateShelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter((book)=>(book.shelf === shelfKey)).map((book) =>(
              <li key={book.id}>
                <Book
                  book={book}
                  updateShelf={updateShelf}
                  currentShelf={shelfKey} />
              </li>
              ))}
           </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
