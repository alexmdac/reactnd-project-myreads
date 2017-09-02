import React, { Component } from 'react'
import Shelf from './Shelf'

class Book extends Component {
  render() {
    let book = this.props.book
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 192,
            backgroundImage: "url('" + encodeURI(book.imageLinks.thumbnail) + "')",
          }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf || "none"}
                    onChange={(e) => this.props.onChangeShelf(book, e.target.value)}>
              <option value="moveTo" disabled>Move to...</option>
              {
                Shelf.shelves.map((shelf) => (
                    <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
                ))
              }
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    )
  }
}

export default Book
