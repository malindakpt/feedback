import { useState, useEffect } from "react";
import { readAllEntity } from "../services/crudService";
import { Employee } from "../interfaces/employee";
import { Collection } from "../enums/collections.enum";

export const useEmployeeByEmpId = (empId: string) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        setError(null);

        // Retrieve all employees from the collection
        const employees = await readAllEntity<Employee>(Collection.Employee);

        if (employees) {
          // Find the employee by empId
          const foundEmployee = employees.find((emp) => emp.employeeId === empId);
          if (foundEmployee) {
            setEmployee(foundEmployee);
          } else {
            console.log("No matching employee found!");
            setEmployee(null);
          }
        }
      } catch (error) {
        console.error("Error fetching employee: ", error);
        setError("Failed to fetch employee.");
      } finally {
        setLoading(false);
      }
    };

    if (empId) {
      fetchEmployee();
    }
  }, [empId]);

  return { employee, loading, error };
};