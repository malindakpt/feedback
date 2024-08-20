// src/App.tsx
import React from 'react';
import './App.css';
import StarRating from './StarReview';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StarRating />
      </header>
    </div>
  );
};

export default App;
