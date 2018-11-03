import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './Search';
import Books from './Books';
import { Route } from 'react-router-dom';



class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

componentDidMount (){
BooksAPI.getAll().then((books) => {
  this.setState({
    books
  })
})
}

handleShelfChange(book,shelf){
BooksAPI.update(book,shelf).then(response=>{
this.getBooksOnShelf()
});
  };
getBooksOnShelf(){
BooksAPI.getAll().then(books=>{
this.setState({
  books
});
});
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Books booksOnShelf={this.state.books} />} />
        <Route
          path="/search"
          render={() =>
            <Search onChangeShelf={this.handleShelfChange} booksOnShelf={this.state.books} />}
        />
      </div>
    )
  }
}

export default BooksApp
