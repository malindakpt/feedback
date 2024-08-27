// src/pages/BranchView.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BranchView: React.FC = () => {
  const { companyId, branchId } = useParams<{ companyId: string; branchId: string }>();

  return (
    <div>
      <h1>Branch View</h1>
      <p>Company ID: {companyId}</p>
      <p>Branch ID: {branchId}</p>
    </div>
  );
};

export default BranchView;
