import { useState, useEffect } from "react";
import { readAllEntity } from "../services/crudService"; // Your CRUD service
import { Company } from "../interfaces/company"; // Create this interface based on your company data structure
import { Collection } from "../enums/collections.enum";

export const useCompanyByCompanyId = (companyId: string) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all companies from Firestore
        const companies = await readAllEntity<Company>(Collection.Companies);
        console.log("companies", companies);

        if (companies) {
          // Find the company by companyId
          const foundCompany = companies.find((c) => c.companyId === companyId);
          if (foundCompany) {
            setCompany(foundCompany);
          } else {
            console.log("No matching company found!");
            setCompany(null);
            setError("No company found.");
          }
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
