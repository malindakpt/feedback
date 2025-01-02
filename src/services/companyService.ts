import { db } from "./auth/firebase";
import { doc, getDoc } from "firebase/firestore";

export interface Company {
  id: string;
  name: string;
  logoUrl: string;
  reviewTitle: string;
}

export const getCompanyById = async (
  companyId: string
): Promise<Company | null> => {
  try {
    const companyDocRef = doc(db, "companies", companyId); 
    const companyDoc = await getDoc(companyDocRef);

    if (companyDoc.exists()) {
      return { id: companyDoc.id, ...companyDoc.data() } as Company;
    } else {
      console.warn("Company not found for ID:", companyId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching company details:", error);
    throw error;
  }
};
