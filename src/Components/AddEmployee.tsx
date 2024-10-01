import React, { useState } from 'react';
import { Button, TextField, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { createData } from '../Services/crudServices';
import { Collection } from '../Enums/collections.enums';

const AddEmployee: React.FC = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async () => {
    const employeeData = {
      name,
      employeeId,
      department,
    };

    const docId = await createData(Collection.Employees, employeeData);
    if (docId) {
      console.log("Employee added with ID: ", docId);
      setName('');
      setEmployeeId('');
      setDepartment('');
      navigate('/employee-list'); // Navigate to EmployeeList page
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <TextField
        label="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        fullWidth
        margin="normal"
      >
        <MenuItem value="HR">HR</MenuItem>
        <MenuItem value="Engineering">Engineering</MenuItem>
        <MenuItem value="Sales">Sales</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Employee
      </Button>
    </div>
  );
};

export default AddEmployee;
