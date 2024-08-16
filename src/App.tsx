import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import FeedbackList from "./Componenets/Feedbacklist";
import "./styles.scss"; // Import styles

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            {/* Navigation links for routing */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feedback-list">Feedback List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* Define routes for the Home and FeedbackList components */}
          <Route path="/" element={<Home />} />
          <Route path="/feedback-list" element={<FeedbackList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
