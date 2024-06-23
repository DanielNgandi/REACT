// src/components/Book.js
import React from 'react';

const Book = ({ book, onShelfChange }) => {
  const handleChange = (event) => {
    onShelfChange(book, event.target.value);
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.authors.join(', ')}</p>
      <select value={book.shelf} onChange={handleChange}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

export default Book;
