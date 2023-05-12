import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Booklist />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
   </>
  );
}

export default App;
