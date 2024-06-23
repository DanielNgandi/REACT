// src/App.js
import React from 'react';
import './App.css';
import BookList from './components/booklist';
import Search from './components/search';

const App = () => {
  return (
    <div className="App">
      <BookList />
      <Search />
    </div>
  );
}

export default App;

