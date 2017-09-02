import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

class ListPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              Shelf.shelves.map((shelf) =>
                <Shelf
                    key={shelf.id}
                    title={shelf.title}
                    books={this.props.books.filter((book) => book.shelf === shelf.id)}
                    onChangeShelf={this.props.onChangeShelf}
                    />
              )
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListPage
