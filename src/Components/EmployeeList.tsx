import React, { useEffect, useState } from 'react';
import { Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { createData, readData, updateData, deleteData } from '../Services/crudServices';
import { Collection } from '../Enums/collections.enums';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeesData = await readData(Collection.Employees);
      setEmployees(employeesData); // Now this should correctly set the state as an array
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteData(Collection.Employees, id);
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleEdit = (employee: any) => {
    setEditingEmployee(employee);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingEmployee(null);
  };

  const handleSave = async () => {
    if (editingEmployee) {
      await updateData(Collection.Employees, editingEmployee.id, {
        name: editingEmployee.name,
        department: editingEmployee.department,
      });
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === editingEmployee.id ? editingEmployee : emp
        )
      );
      handleDialogClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingEmployee) {
      setEditingEmployee({ ...editingEmployee, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <List>
        {employees.map((employee) => (
          <ListItem key={employee.id}>
            <ListItemText
              primary={employee.name}
              secondary={employee.department}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEdit(employee)}>
                ✏️
              </IconButton>
              <IconButton edge="end" onClick={() => handleDelete(employee.id)}>
                🗑️
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            value={editingEmployee?.name || ''}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="department"
            label="Department"
            value={editingEmployee?.department || ''}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeList;
