import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AddEmployeeForm from "./addEmployee";
import { useCreateEmployeeMutation, useUploadImageMutation } from "../../services/employeeApi";
import { Employee } from "../../interfaces/employee";
import { showPopUp } from '../../services/popup.service';
import { popupType } from '../../enums/popupType.enum';

const AddEmployeeContainer: React.FC = () => {
  const [employeeImage, setEmployeeImage] = useState<File | null>(null);
  const [createEmployee] = useCreateEmployeeMutation();
  const [uploadImage] = useUploadImageMutation();

  const handleSave = async (values: Employee, { resetForm }: { resetForm: () => void }) => {
    try {
      let imageUrl = "";

      if (employeeImage) {
        const uploadResult = await uploadImage({
          folder: "employee-images",
          file: employeeImage,
        }).unwrap();
        imageUrl = uploadResult;
      }

      const formData = { ...values, image: imageUrl };
      await createEmployee(formData).unwrap();

      //alert("Employee added successfully");
      showPopUp('Employee added successfully', popupType.Success)
      resetForm();
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
