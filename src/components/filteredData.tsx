import React, { useState } from 'react';

interface Branch {
  id: string;
  name: string;
}

interface Company {
  name: string;
  branches: Branch[];
}

const companyData: Company[] = [
  {
    name: 'Company 1',
    branches: [
      { id: '111A', name: 'Branch 1' },
      { id: '111B', name: 'Branch 2' },
    ],
  },
  {
    name: 'Company 2',
    branches: [
      { id: '222A', name: 'Branch 1' },
      { id: '222B', name: 'Branch 2' },
    ],
  },
  {
    name: 'Company 3',
    branches: [
      { id: '333A', name: 'Branch 1' },
      { id: '333B', name: 'Branch 2' },
    ],
  },
  {
    name: 'Company 4',
    branches: [
      { id: '444A', name: 'Branch 1' },
      { id: '444B', name: 'Branch 2' },
    ],
  },
];

const BranchFilter = () => {
  const [searchTerm, setSearchTerm] = useState(''); // To store the filter term
  const [filteredBranches, setFilteredBranches] = useState<Branch[]>([]);

  // Function to handle filtering
  const handleFilter = (term: string) => {
    setSearchTerm(term);

    // Filter branches by matching the branch ID with the search term
    const filtered = companyData
      .flatMap(company => company.branches)
      .filter(branch => branch.id.startsWith(term));

    setFilteredBranches(filtered);
  };

  return (
    <div>
      <h1>Branch Filter</h1>

      {/* Input box to filter by branch ID */}
      <input
        type="text"
        value={searchTerm}
        placeholder="Enter branch ID"
        onChange={(e) => handleFilter(e.target.value)}
      />

      {/* Display the filtered branches */}
      <ul>
        {filteredBranches.length > 0 ? (
          filteredBranches.map(branch => (
            <li key={branch.id}>
              {branch.id} - {branch.name}
            </li>
          ))
        ) : (
          <p>No branches found.</p>
        )}
      </ul>
    </div>
  );
};

export default BranchFilter;
