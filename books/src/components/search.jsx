// src/components/Search.js
import React, { useState } from 'react';
import { search } from '../Api';
import Book from './book';

const Search = ({ onShelfChange }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    search(query).then(setResults);
  };

  return (
    <div>
      <h1>Search Books</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search by title or author" 
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map(book => (
          <Book key={book.id} book={book} onShelfChange={onShelfChange} />
        ))}
      </div>
    </div>
  );
};

export default Search;
