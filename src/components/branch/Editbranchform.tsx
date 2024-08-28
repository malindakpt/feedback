import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

interface EditBranchFormProps {
  branch: { id: string; name: string; location: string };
  onUpdateBranch: (branch: { id: string; name: string; location: string }) => void;
}

const EditBranchForm: React.FC<EditBranchFormProps> = ({ branch, onUpdateBranch }) => {
  const [name, setName] = useState(branch.name);
  const [location, setLocation] = useState(branch.location);

  useEffect(() => {
    setName(branch.name);
    setLocation(branch.location);
  }, [branch]);

  const handleSubmit = () => {
    onUpdateBranch({ id: branch.id, name, location });
  };

  return (
    <div>
      <TextField
        label="Branch Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        margin="normal"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Update Branch
      </Button>
    </div>
  );
};

export default EditBranchForm;
