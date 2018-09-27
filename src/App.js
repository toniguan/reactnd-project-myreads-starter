import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import MainPage  from './pages/MainPage'
import SearchPage from './pages/SearchPage'

class BooksApp extends React.Component {
  state = {
    books : [],
    sMap : {}  /* map <book.id : book.shelf>  used in SearchPage*/
  }

  componentDidMount() {
    BooksAPI.getAll().then( response =>{
      this.setState({books:response})
      this.buildMap(this.state.books)
    })
  }

  buildMap(books){
    let myMap = new Map();
    books.forEach(book =>{
      myMap.set(book.id, book.shelf)
    })
    this.setState({ sMap:myMap })
  }

  updateShelf = (book, shelf)=>{
    BooksAPI.update(book, shelf).then(response =>{
      BooksAPI.getAll().then(response =>{
        this.setState({books:response})
      })//then2
      shelf !== 'none' ? this.state.sMap.set(book.id, shelf):this.state.sMap.delete(book.id)
    })//then1
  }
  render() {
    this.state.books.sort(sortBy('title'))
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <MainPage books={this.state.books} updateShelf={this.updateShelf}/>
        )}/>
        <Route path="/search" render={()=>(
          <SearchPage sMap={this.state.sMap} updateShelf={this.updateShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
