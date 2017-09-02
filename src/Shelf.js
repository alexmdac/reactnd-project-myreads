import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  static get shelves() {
    return [
      {
        id: "currentlyReading",
        title: "Currently Reading",
      },
      {
        id: "wantToRead",
        title: "Want to Read",
      },
      {
        id: "read",
        title: "Read",
      },
    ]
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
                  <li key={book.id}>
                    <Book
                        book={book}
                        onChangeShelf={this.props.onChangeShelf}
                    />
                  </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
