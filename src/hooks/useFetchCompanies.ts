import { useEffect, useState } from "react";
import { readAllEntity } from "../services/crudService";
import { Company } from "../interfaces/entities/company";
import { Collection } from "../enums/collections.enum";

export const useFetchCompany = (companyId?: string) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await readAllEntity<Company>(Collection.Companies);

        if (data) {
          setCompanies(data);

          if (companyId) {
            const foundCompany = data.find((companies) => companies.id === companyId);
            if (foundCompany) {
              setCompany(foundCompany);
            } else {
              console.log("No matching company found!");
              setCompany(null);
            }
          }
        }
    } catch (error) {
        console.error("Error fetching company:", error);
        setError("Failed to fetch companies.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companyId]);

  return { companies, company, loading, error };
};
