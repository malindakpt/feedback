// src/App.tsx
import React from 'react';
import './App.css';
import { StarReview } from './components/StarReview';
import TextRating from './components/StarReviewMUI';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/starreview" element={<StarReview />} />
          <Route path="/text-rating" element={<TextRating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;