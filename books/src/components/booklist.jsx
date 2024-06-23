// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { getAll, update } from '../Api';
import Book from './book';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then(setBooks);
  }, []);

  const handleShelfChange = (book, shelf) => {
    update(book, shelf).then(() => {
      setBooks(books.map(b => (b.id === book.id ? { ...b, shelf } : b)));
    });
  };

  return (
    <div>
      <h1>My Books</h1>
      <div>
        {books.map(book => (
          <Book key={book.id} book={book} onShelfChange={handleShelfChange} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
