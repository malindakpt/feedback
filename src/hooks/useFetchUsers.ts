import { useState, useEffect } from "react";
import { readAllEntity } from "../services/crudService";
import { User } from "../interfaces/entities/user";
import { Collection } from "../enums/collections.enum";

export const useFetchUser = (userId?: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await readAllEntity<User>(Collection.Users);

        if (data) {
          setUsers(data);

          if (userId) {
            const foundUser = data.find((user) => user.id === userId);
            if (foundUser) {
              setUser(foundUser);
            } else {
              console.log("No matching user found!");
              setUser(null);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setError("Failed to fetch user.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { users, user, loading, error };
};
