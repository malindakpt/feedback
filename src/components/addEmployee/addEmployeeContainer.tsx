import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { createEntity } from "../../services/crudService";
import { Collection } from "../../enums/collections.enum";
import { uploadImage } from "../../services/imageUploaderService";
import AddEmployeeForm from "./addEmployee"; // Import the form
import { Employee } from "../../interfaces/employee";

const AddEmployeeContainer: React.FC = () => {
  const [employeeImage, setEmployeeImage] = useState<File | null>(null); // State to store the uploaded image file

  const handleSave = async (values: Employee, { resetForm }: { resetForm: () => void }) => {
    try {
      let imageUrl = "";

      if (employeeImage) {
        // Upload the image using the uploadImage function from imageUploaderServices
        imageUrl = await uploadImage("employee-images", values.empId, employeeImage);
      }

      // Include the image URL in the form data
      const formData = { ...values, image: imageUrl };

      // Store the employee data including image URL
      const id = await createEntity(Collection.Employee, formData);
      if (id) {
        alert("Employee added successfully");
        resetForm();
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Add Employee
      </Typography>
      <AddEmployeeForm onSave={handleSave} onImageChange={setEmployeeImage} />
    </Box>
  );
};

export default AddEmployeeContainer;