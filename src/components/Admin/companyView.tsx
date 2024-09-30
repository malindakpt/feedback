import React from 'react'
import { Link } from 'react-router-dom';

function CompanyView() {
  return (
    <div>
      View full summary of Company<br/>
      <Link to="/admin/branchView">View Every Branch Details</Link><br/>
      <Link to="/admin/employeeStatView/:id">View Single Employee Details</Link>
      </div>
  )
}

export default CompanyView