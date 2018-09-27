import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
import Shelf from '../Shelf'


class MainPage extends Component{
  render(){
    const catalogs = [ // shelf catagory
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
                <Shelf key={shelf.key}
                  books={this.props.books}
                  shelfTitle={shelf.title}
                  shelfKey={shelf.key}
                  updateShelf={this.props.updateShelf} />
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
