import { useState, useEffect } from "react";
import { FilterCondition, readFilteredEntity } from "../services/crudService";
import { Company } from "../interfaces/entities/company";
import { Collection } from "../enums/collections.enum";

export const useCompanyByCompanyID = (companyId: string) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true);
        setError(null);

        // Retrieve the company for the relevant ID from the collection
        const filters: FilterCondition[] = [{ field: "id", operator: "==", value: companyId }];
        const result = await readFilteredEntity<Company>(Collection.Companies, filters);

        if (result && result.length > 0) {
          setCompany(result[0]); 
        } else {
          console.log("No matching company found!");
          setCompany(null);
        }
      } catch (error) {
        console.error("Error fetching company: ", error);
        setError("Failed to fetch company.");
      } finally {
        setLoading(false);
      }
  
    };

    if (companyId) {
      fetchCompany();
    }
  }, [companyId]);

  return { company, loading, error };
};