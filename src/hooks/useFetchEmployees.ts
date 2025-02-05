import { useState, useEffect } from "react";
import { readAllEntity } from "../services/crudService";
import { Employee } from "../interfaces/entities/employee";
import { Collection } from "../enums/collections.enum";

export const useFetchEmployee = (employeeId?: string) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await readAllEntity<Employee>(Collection.Employee);

        if (data) {
          setEmployees(data);

          if (employeeId) {
            const foundEmployee = data.find((employee) => employee.uid === employeeId);
            if (foundEmployee) {
              setEmployee(foundEmployee);
            } else {
              console.log("No matching employee found!");
              setEmployee(null);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        setError("Failed to fetch employees.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [employeeId]);

  return { employees, employee, loading, error };
};
