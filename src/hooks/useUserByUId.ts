import { useState, useEffect } from "react";
import { FilterCondition, readFilteredEntity } from "../services/crudService";
import { User } from "../interfaces/entities/user";
import { Collection } from "../enums/collections.enum";

export const useUserByUId = (id: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        // Retrieve the user for the relevant ID from the collection
                const filters: FilterCondition[] = [{ field: "id", operator: "==", value: id }];
                const result = await readFilteredEntity<User>(Collection.Users, filters);
        
                if (result && result.length > 0) {
                  setUser(result[0]); 
                } else {
                  console.log("No matching user found!");
                  setUser(null);
                }
              } catch (error) {
                console.error("Error fetching user: ", error);
                setError("Failed to fetch user.");
              } finally {
                setLoading(false);
              }
          
            };

    if (id) {
      fetchUser();
    }
  }, [id]);

  return { user, loading, error };
};