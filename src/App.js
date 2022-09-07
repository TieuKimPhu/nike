import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home/Home';
import DetailProductPage from './pages/DetailProduct/detailProductPage';

function App() {
  return (
      <Routes>
        <Route path="/" caseSensitive={true} element={<Homepage />} />
        <Route path="/detailProduct/:id" element={<DetailProductPage />} />
      </Routes>
  );
}
export default App;
