import React from "react";
import { useGetBranchesQuery } from "../services/branchApi"; // Import the hook

const BranchList = () => {
  const { data: branches, isLoading, isError } = useGetBranchesQuery(); // Fetch branches using the query

  if (isLoading) {
    return <p>Loading branches...</p>; // Loading state
  }

  if (isError) {
    return <p>Error fetching branches.</p>; // Error state
  }

  return (
    <div>
      <h2>Branches</h2>
      {branches && branches.length > 0 ? (
        <ul>
          {branches.map((branch) => (
            <li key={branch.id}>{branch.name},{branch.companyId}</li> // Displaying the branch name
          ))}
        </ul>
      ) : (
        <p>No branches found.</p> // Case when no branches are available
      )}
    </div>
  );
};

export default BranchList;
