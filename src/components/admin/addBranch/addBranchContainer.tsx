import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Branch } from "../../../interfaces/branch";
import { createEntity } from "../../../services/crudService";
import { Collection } from "../../../enums/collections.enum";
import { uploadImage } from "../../../services/imageUploaderService";
import AddBranchForm from "./addBranchForm";

const AddBranchContainer: React.FC = () => {
  const [branchImage, setBranchImage] = useState<File | null>(null);

  const handleSave = async (
    values: Branch,
    { resetForm }: {resetForm:() => void}
  ) => {
    try {
      let imageUrl = "";

      if (branchImage) {
        imageUrl = await uploadImage("branch-images", values.branchName, branchImage);
      }

      const formData: Branch = { ...values, branchImageUrl: imageUrl };

      const id = await createEntity(Collection.Branches, formData);
      if (id) {
        alert("Branch added successfully");
        resetForm();
        setBranchImage(null); // Reset image after successful form submission
      }
    } catch (error) {
      console.error("Error adding branch:", error);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Add Branch
      </Typography>
      <AddBranchForm onSave={handleSave} onImageChange={setBranchImage} />
    </Box>
  );
};

export default AddBranchContainer;
