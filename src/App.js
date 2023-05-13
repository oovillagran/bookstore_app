import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Booklist from './components/BooksList';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
