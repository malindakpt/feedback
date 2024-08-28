// BranchManager.tsx
import React, { useState } from 'react';
import AddBranchForm from '../branch/Addbranch_form';
import EditBranchForm from '../branch/Editbranch_form';

const BranchManager: React.FC = () => {
  const [branches, setBranches] = useState<{ id: string; name: string; location: string }[]>([]);
  const [editingBranch, setEditingBranch] = useState<{ id: string; name: string; location: string } | null>(null);

  const handleAddBranch = (newBranch: { name: string; location: string }) => {
    const id = new Date().toISOString(); // Simple ID generation
    setBranches([...branches, { id, ...newBranch }]);
  };

  const handleUpdateBranch = (updatedBranch: { id: string; name: string; location: string }) => {
    setBranches(branches.map(branch =>
      branch.id === updatedBranch.id ? updatedBranch : branch
    ));
    setEditingBranch(null);
  };

  return (
    <div>
      <AddBranchForm onAddBranch={handleAddBranch} />
      {editingBranch && (
        <EditBranchForm
          branch={editingBranch}
          onUpdateBranch={handleUpdateBranch}
        />
      )}
      <ul>
        {branches.map(branch => (
          <li key={branch.id}>
            {branch.name} - {branch.location}
            <button onClick={() => setEditingBranch(branch)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BranchManager;
