import React from "react";
import { useEmployeeByEmpId } from "./useEmployeeByEmpId";

const EmployeeDetails: React.FC<{ empId: string }> = ({ empId }) => {
  const { employee, loading, error } = useEmployeeByEmpId(empId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!employee) {
    return <div>No employee found with ID: {empId}</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Employee ID: {employee.empId}</p>
      <p>Name: {employee.name}</p>
      <p>Company: {employee.company}</p>
      <p>Branch: {employee.branch}</p>
      <p>Birthday: {employee.birthday}</p>
      <p>NIC: {employee.nic}</p>
      {employee.image && <img src={employee.image} alt={`${employee.name}'s Profile`} />}
    </div>
  );
};

export default EmployeeDetails;
