import React from 'react'
import { Link } from 'react-router-dom';

function employee_feedback() {
  return (
    <div>
      Employees Feedback
      <Link to="/employee/id">Give Feedback for single Employee</Link>
      </div>
  )
}

export default employee_feedback