import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListPage from './ListPage'
import SearchPage from './SearchPage'

class App extends Component {
  state = {
    books: [],
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => this.renderListPage()} />
        <Route path="/search" render={() => this.renderSearchPage()} />
      </div>
    )
  }

  renderListPage() {
    return (
        <ListPage
            books={this.state.books}
            onChangeShelf={(book, shelf) => this.onChangeShelf(book, shelf)} />
    )
  }

  renderSearchPage() {
    return (
        <SearchPage
            books={this.state.books}
            onChangeShelf={(book, shelf) => this.onChangeShelf(book, shelf)} />
    )
  }

  fetchBooks() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books,
    }))
  }

  componentDidMount() {
    this.fetchBooks()
  }

  onChangeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => this.fetchBooks())
  }
}

export default App
