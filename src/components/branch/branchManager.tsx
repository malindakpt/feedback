import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../services/auth/firebase';

const BranchManager: React.FC = () => {
  const [companies, setCompanies] = useState<{ id: string, name: string }[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [branchName, setBranchName] = useState<string>('');
  const [branchLocation, setBranchLocation] = useState<string>('');
  const [editingBranch, setEditingBranch] = useState<{ id: string; name: string; location: string; companyId: string } | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      const querySnapshot = await getDocs(collection(db, 'companies'));
      const companiesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCompanies(companiesData as { id: string; name: string }[]);
    };

    fetchCompanies();
  }, []);

  const handleAddBranch = async () => {
    if (!selectedCompany || !branchName || !branchLocation) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const newBranch = { name: branchName, location: branchLocation, companyId: selectedCompany };
      await addDoc(collection(db, 'branches'), newBranch);
      alert('Branch added successfully');
      setBranchName('');
      setBranchLocation('');
      setSelectedCompany('');
    } catch (e) {
      console.error('Error adding branch:', e);
      alert('Failed to add branch');
    }
  };

  const handleUpdateBranch = async () => {
    if (!editingBranch) return;

    try {
      const branchRef = doc(db, 'branches', editingBranch.id);
      await updateDoc(branchRef, {
        name: branchName,
        location: branchLocation,
        companyId: selectedCompany
      });
      alert('Branch updated successfully');
      setEditingBranch(null);
      setBranchName('');
      setBranchLocation('');
      setSelectedCompany('');
    } catch (e) {
      console.error('Error updating branch:', e);
      alert('Failed to update branch');
    }
  };

  return (
    <Container maxWidth="sm">
      <FormControl fullWidth margin="normal">
        <InputLabel id="company-select-label">Select Company</InputLabel>
        <Select
          labelId="company-select-label"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map(company => (
            <MenuItem key={company.id} value={company.id}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Branch Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={branchName}
        onChange={(e) => setBranchName(e.target.value)}
      />

      <TextField
        label="Branch Location"
        variant="outlined"
        fullWidth
        margin="normal"
        value={branchLocation}
        onChange={(e) => setBranchLocation(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={editingBranch ? handleUpdateBranch : handleAddBranch}
      >
        {editingBranch ? 'Update Branch' : 'Add Branch'}
      </Button>
    </Container>
  );
};

export default BranchManager;
