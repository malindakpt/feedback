import { useEffect, useState } from "react";
import { readFilteredEntity, FilterCondition } from "../services/crudService";
import { User } from "../interfaces/entities/user";
import { Collection } from "../enums/collections.enum";

export const useUserByBranchId = (branchId: string | null) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!branchId) {
        setUsers([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const filters: FilterCondition[] = [
          { field: "branchId", operator: "==", value: branchId },
        ];

        const usersData = await readFilteredEntity<User>(Collection.Users, filters);
        setUsers(usersData || []);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [branchId]);

  return { users, loading, error };
};