import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AddBranchForm from "./addBranch";
import { Branch } from "../../../interfaces/branch";
import { useCreateBranchMutation, useUploadImageMutation } from "../../../services/api/branchApi";
import { readAllEntity } from "../../../services/crudService";
import { Company } from "../../../interfaces/company";
import { Collection } from "../../../enums/collections.enum";

const AddBranchContainer: React.FC = () => {
  const [branchImage, setBranchImage] = useState<File | null>(null);
  const [companyNames, setCompanyNames] = useState<string[]>([]);
  const [createBranch] = useCreateBranchMutation();
  const [uploadImage] = useUploadImageMutation();

    // Fetch company names
    useEffect(() => {
      const fetchCompanies = async () => {
        try {
          const companies = await readAllEntity<Company>(Collection.Companies);
          if (companies) {
            setCompanyNames(companies.map((company) => company.name));
          }
        } catch (error) {
          console.error("Error fetching companies:", error);
        }
      };
  
      fetchCompanies();
    }, []);

  const handleSave = async (
    values: Branch,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      let imageUrl = "";

      if (branchImage) {
        const uploadedImage = await uploadImage({
          folder: "branch-images",
          file: branchImage,
        }).unwrap();
        imageUrl = uploadedImage;
      }

      const formData: Branch = { ...values, branchImageUrl: imageUrl };
      await createBranch(formData).unwrap();

      alert("Branch added successfully");
      resetForm();
      setBranchImage(null);
    } catch (error) {
      console.error("Error adding branch:", error);
      alert("Failed to add branch. Please try again.");
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Add Branch
      </Typography>
      <AddBranchForm onSave={handleSave} onImageChange={setBranchImage} company={companyNames} />
    </Box>
  );
};

export default AddBranchContainer;


