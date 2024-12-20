import { useEffect, useState } from "react";
import { readAllEntity } from "../services/crudService";
import { Collection } from "../enums/collections.enum";
import { Company } from "../interfaces/company";

export const useFetchCompany = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companyData = await readAllEntity<Company>(Collection.Companies);
        if (companyData) {
          setCompanies(companyData);
        }
      } catch (err) {
        console.error("Error fetching companies:", err);
        setError("Failed to fetch companies.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return { companies, loading, error };
};
