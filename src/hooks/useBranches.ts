import { useEffect, useState } from "react";
import { readAllEntity } from "../services/crudService";
import { Branch } from "../interfaces/entities/branch";
import { Collection } from "../enums/collections.enum";

export const useBranches = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
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
        }
      } catch (error) {
        console.error("Error fetching branches:", error);
        setError("Failed to fetch branches.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { branches, loading, error };
};
