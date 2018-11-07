import React from 'react';

const Book =(props) =>{
let { imageLinks } = props.book;
  if (!imageLinks) {
    imageLinks = 'https://via.placeholder.com/128x170/ff7f7f/333333?text=NoImage'
  }
const {title , authors } = props.book;
  return(
    <li className="book-details" key={props.book.id}>
      <div className="book-image" style={{backgroundImage: "url(" + props.book.imageLinks.smallThumbnail + ")"}}>
        <div className="status-selector">
          <select value={props.shelf} onChange={(e) => props.onChangeShelf(props.book, e.target.value)}>
            <option value="disabled" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <p>{title}</p>
      {authors && <p><span className="gray-text">{authors[0]}</span></p> }
    </li>
  )
}

export default Book;
