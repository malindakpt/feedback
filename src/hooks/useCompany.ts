import { useEffect, useState } from "react";
import { getCompanyById } from "../services/companyService";
import { Company } from "../services/companyService";

export const useCompany = (companyId: string) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        console.log("Fetching company for ID:", companyId); // Debugging
        const companyData = await getCompanyById(companyId);
        console.log("Fetched company data:", companyData); // Debugging
        setCompany(companyData || null);
      } catch (err) {
        console.error("Error fetching company:", err); // Debugging
        setError("Error fetching company details.");
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
