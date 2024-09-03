import React from 'react'
import { Link } from 'react-router-dom';

function branch_view() {
  return (
    <div>
      View Branch Details with Charts<br/>
      <Link to="/admin/branch-view/id">View Branch Single Page</Link>
      </div>
  )
}

export default branch_view