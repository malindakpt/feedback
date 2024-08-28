import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CommentBox from './Componenets/CommentBox';
import CommentList from './Componenets/CommentList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feedback-list">Feedback List</Link>
            </li>
            <li>
              <Link to="/CommentBox">Comment</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/feedback-list" />
          <Route path="/CommentBox" element={<CommentBox />} />
          <Route path="/comments" element={<CommentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
