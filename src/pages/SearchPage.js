import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../Book'

class SearchPage extends Component{
  state = {
    query :'',
    results : []
  }

  updateQuery(queryValue){
    this.setState({query:queryValue});
    this.search(queryValue);
  }

  search(query){
    if(query){
      BooksAPI.search(query).then( res => {
        if(res.error){
          console.log("query with ["+ query + "] !!!")
          console.log("error is: " + res.error)
          this.setState({ results:[] })
        }else{
          this.setState({ results:res })
        }
      })}
    else{
      this.setState({ results:[] })
    }
  }


  render(){
    const {sMap, updateShelf} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value = {this.state.query}
              onChange = {e=>{this.updateQuery(e.target.value)}}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) =>(
              <li key={book.id}>
                <Book
                  book={book}
                  updateShelf={updateShelf}
                  currentShelf={sMap.has(book.id)? sMap.get(book.id): 'none'}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
