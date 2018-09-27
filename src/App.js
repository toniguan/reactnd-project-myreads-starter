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

  /*load the shelf books once app component mounted*/
  componentDidMount() {
    BooksAPI.getAll().then( response =>{
      this.setState({books:response})
      this.buildMap(this.state.books)
    })
  }

  /*build map based on the current shelf books*/
  buildMap(books){
    let myMap = new Map();
    books.forEach(book =>{
      myMap.set(book.id, book.shelf)
    })
    this.setState({ sMap:myMap })
  }

  /* update book's shelf*/
  updateShelf = (book, shelf)=>{
    //push the change back to server
    BooksAPI.update(book, shelf).then(response =>{
      //update the current book collection
      BooksAPI.getAll().then(response =>{
        this.setState({books:response})
      })//then2
      //update the map
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
