import { useEffect, useState } from "react";
import { readFilteredEntity, FilterCondition } from "../services/crudService";
import { Employee } from "../interfaces/employee";
import { Collection } from "../enums/collections.enum";

export const useEmployeesByBranchId = (branchId: string | null) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      if (!branchId) {
        setEmployees([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const filters: FilterCondition[] = [
          { field: "branchId", operator: "==", value: branchId },
        ];

        const employeeData = await readFilteredEntity<Employee>(Collection.Employee, filters);
        setEmployees(employeeData || []);
      } catch (err) {
        console.error("Error fetching employees:", err);
        setError("Failed to fetch employees.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [branchId]);

  return { employees, loading, error };
};