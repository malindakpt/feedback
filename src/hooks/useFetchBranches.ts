import { useEffect, useState } from "react";
import { readAllEntity } from "../services/crudService";
import { Branch } from "../interfaces/entities/branch";
import { Collection } from "../enums/collections.enum";

export const useFetchBranch = (branchId?: string) => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [branch, setBranch] = useState<Branch | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await readAllEntity<Branch>(Collection.Branches);

        if (data) {
          setBranches(data);

          if (branchId) {
            const foundUser = data.find((branch) => branch.id === branchId);
            if (foundUser) {
              setBranch(foundUser);
            } else {
              console.log("No matching branch found!");
              setBranch(null);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching branches:", error);
        setError("Failed to fetch branches.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [branchId]);

  return { branches, branch, loading, error };
};
