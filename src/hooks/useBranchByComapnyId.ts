import { useEffect, useState } from "react";
import { readFilteredEntity, FilterCondition } from "../services/crudService";
import { Branch } from "../interfaces/entities/branch";
import { Collection } from "../enums/collections.enum";

export const useBranchByCompanyId = (companyId: string | null) => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBranches = async () => {
      if (!companyId) {
        setBranches([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const filters: FilterCondition[] = [
          { field: "companyId", operator: "==", value: companyId },
        ];
        const branchData = await readFilteredEntity<Branch>(Collection.Branches, filters);
        setBranches(branchData || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching branches:", err);
        setError("Failed to fetch branches.");
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, [companyId]);

  return { branches, loading, error };
};