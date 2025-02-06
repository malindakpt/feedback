import { useState, useEffect } from "react";
import { FilterCondition, readFilteredEntity } from "../services/crudService";
import { Branch } from "../interfaces/entities/branch";
import { Collection } from "../enums/collections.enum";

export const useBranchByBranchID = (branchId: string) => {
  const [branch, setBranch] = useState<Branch | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        setLoading(true);
        setError(null);

        // Retrieve the branch for the relevant ID from the collection
        const filters: FilterCondition[] = [{ field: "id", operator: "==", value: branchId }];
        const result = await readFilteredEntity<Branch>(Collection.Companies, filters);

        if (result && result.length > 0) {
          setBranch(result[0]); 
        } else {
          console.log("No matching branch found!");
          setBranch(null);
        }
      } catch (error) {
        console.error("Error fetching branch: ", error);
        setError("Failed to fetch branch.");
      } finally {
        setLoading(false);
      }
  
    };

    if (branchId) {
      fetchBranch();
    }
  }, [branchId]);

  return { branch, loading, error };
};