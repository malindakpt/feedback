import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface AddBranchFormProps {
  onAddBranch: (branch: { name: string; location: string }) => void;
}

const AddBranchForm: React.FC<AddBranchFormProps> = ({ onAddBranch }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    onAddBranch({ name, location });
    setName('');
    setLocation('');
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
        Add Branch
      </Button>
    </div>
  );
};

export default AddBranchForm;
