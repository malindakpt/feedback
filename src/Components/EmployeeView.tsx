// src/pages/EmployeeView.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeView: React.FC = () => {
  const { companyId, branchId, employeeId } = useParams<{ companyId: string; branchId: string; employeeId: string }>();

  return (
    <div>
      <h1>Employee View</h1>
      <p>Company ID: {companyId}</p>
      <p>Branch ID: {branchId}</p>
      <p>Employee ID: {employeeId}</p>
    </div>
  );
};

export default EmployeeView;
