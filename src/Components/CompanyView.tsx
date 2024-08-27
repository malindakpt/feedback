
import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyView: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  return (
    <div>
      <h1>Company View</h1>
      <p>Company ID: {companyId}</p>
    </div>
  );
};

export default CompanyView;
