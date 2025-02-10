import { useState, useEffect } from "react";
import { readAllEntity } from "../services/crudService"; // Your CRUD service
import { Branch } from "../interfaces/branch"; // Create this interface based on your branch data structure
import { Collection } from "../enums/collections.enum";

export const useBranchByBranchId = (branchId: string) => {
  const [branch, setBranch] = useState<Branch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all branches from Firestore
        const branches = await readAllEntity<Branch>(Collection.Branches);
        console.log("branches", branches);

        if (branches) {
          // Find the branch by branchId
          const foundBranch = branches.find((b) => b.branchId === branchId);
          if (foundBranch) {
            setBranch(foundBranch);
          } else {
            console.log("No matching branch found!");
            setBranch(null);
            setError("No branch found.");
          }
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
