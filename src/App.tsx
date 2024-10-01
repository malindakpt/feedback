import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import CommentBox from './Components/CommentBox';
import CommentList from './Components/CommentList';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/EmployeeList';
import PrimarySearchAppBar from './Components/Dashboard';
import AccountPage from './Components/ImageUploader/Account'; // Ensure correct path

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Add the AppBar here */}
        <PrimarySearchAppBar />
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
            <li>
              <Link to="/add-employee">Add Employee</Link>
            </li>
            <li>
              <Link to="/employee-list">Employee List</Link>
            </li>
            <li>
              <Link to="/account">Account</Link> {/* Add route to Account */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/feedback-list" />
          <Route path="/CommentBox" element={<CommentBox />} />
          <Route path="/comments" element={<CommentList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/account" element={<AccountPage />} />
           {/* Ensure AccountPage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
