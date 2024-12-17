import React from 'react';
import { useFetchEmployees } from '../hooks/useFetchEmployees';

const EmployeeList: React.FC = () => {
  const { employees } = useFetchEmployees();

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
