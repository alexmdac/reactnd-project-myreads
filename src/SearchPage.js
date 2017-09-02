import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

  state = {
    searchResults: [],
  }

  updateSearchResults(searchResults) {
    // Determine shelf.
    let existingBooksAsMap = new Map(
        this.props.books.map((book) => [book.id, book]))
    for (let i = 0; i < searchResults.length; ++i) {
      let existingBook = existingBooksAsMap.get(searchResults[i].id)
      if (existingBook !== undefined) {
        searchResults[i].shelf = existingBook.shelf;
      }
    }
    this.setState({searchResults: searchResults})
  }

  clearSearchResults() {
    this.setState({searchResults: []})
  }

  search(query) {
    query = query.trim()
    if (query.length === 0) {
      this.clearSearchResults()
    } else {
      BooksAPI.search(query, 20)  // maxResults apparently is ignored
          .then((searchResults) => this.updateSearchResults(searchResults))
          .catch(() => this.clearSearchResults())
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                   onChange={(e) => this.search(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchResults.map((book) => (
                  <Book key={book.id}
                        book={book}
                        onChangeShelf={this.props.onChangeShelf}
                        />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
