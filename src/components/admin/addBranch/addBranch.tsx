import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import TextInput from "../../shared/textInput/textInput";
import { createEntity } from "../../../services/crudService";
import { Collection } from "../../../enums/collections.enum";

const AddBranch: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    branchName: "",
    location: "",
    contactNumber: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (
      !formData.company ||
      !formData.branchName ||
      !formData.location ||
      !formData.contactNumber
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      const id = await createEntity(Collection.Branches, formData);
      if (id) {
        alert("Branch added successfully");
        setFormData({
          company: "",
          branchName: "",
          location: "",
          contactNumber: "",
        });
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
      <TextInput
        label="Company"
        value={formData.company}
        onChange={(value) => handleChange("company", value)}
        required
      />
      <TextInput
        label="Branch Name"
        value={formData.branchName}
        onChange={(value) => handleChange("branchName", value)}
        required
      />
      <TextInput
        label="Location"
        value={formData.location}
        onChange={(value) => handleChange("location", value)}
        required
      />
      <TextInput
        label="Contact Number"
        value={formData.contactNumber}
        onChange={(value) => handleChange("contactNumber", value)}
        required
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Add Branch
      </Button>
    </Box>
  );
};

export default AddBranch;
