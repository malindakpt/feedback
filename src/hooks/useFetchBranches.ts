import { useEffect, useState } from "react";
import { readAllEntity } from "../services/crudService";
import { Collection } from "../enums/collections.enum";
import { Branch } from "../interfaces/branch";

export const useFetchBranch = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const branchData = await readAllEntity<Branch>(Collection.Branches);
        if (branchData) {
          setBranches(branchData);
        }
      } catch (err) {
        console.error("Error fetching branches:", err);
        setError("Failed to fetch branches.");
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  return { branches, loading, error };
};
