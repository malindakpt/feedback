import { useState, useEffect } from 'react';
import { readAllEntity } from '../services/crudService';
import { Collection } from "../enums/collections.enum";
import { Employee } from "../interfaces/employee";

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeeData = await readAllEntity<Employee>(Collection.Employee);
        if (employeeData) {
          setEmployees(employeeData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employees:", error);
        setError("Failed to fetch employees.");
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, error };
};
