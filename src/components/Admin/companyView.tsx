import React from 'react'
import { Link } from 'react-router-dom';

function company_view() {
  return (
    <div>
      View full summary of Company<br/>
      <Link to="/admin/branch-view">View Every Branch Details</Link><br/>
      <Link to="/admin/employee-view/id">View Single Employee Details</Link>
      </div>
  )
}

export default company_view