import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { createEntity, readAllEntity } from "../../../services/crudService";
import { Collection } from "../../../enums/collections.enum";
import AddEmployeeForm from "./addEmployee";
import { Employee } from "../../../interfaces/entities/employee";
import { useFetchCompany } from "../../../hooks/useFetchCompanies";
import { useFetchBranches } from "../../../hooks/useBranchesByComapnyId";
import LinearProgressBar from "../../shared/linearProgressBar/linearProgressBar";
import { useCreateEmployeeMutation, useUploadImageMutation } from "../../../services/employeeApi";

const AddEmployeeContainer: React.FC = () => {
  const [employeeImage, setEmployeeImage] = useState<File | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [createEmployee] = useCreateEmployeeMutation();
  const [uploadImage] = useUploadImageMutation();

  const { companies, loading: companiesLoading, error: companiesError } = useFetchCompany();
  const { branches, loading: branchesLoading, error: branchesError } = useFetchBranches(selectedCompany);

  const handleSave = async (values: Employee, { resetForm }: { resetForm: () => void }) => {
    setIsSaving(true);
    try {
      const existingEmployees = await readAllEntity<Employee>(Collection.Employee);
      if (existingEmployees?.some((employee) => employee.uid === values.uid)) {
        alert("Employee ID already exists. Please use a unique ID.");
        setIsSaving(false);
        return;
      }

      let imageUrl = "";
      if (employeeImage) {
        const uploadedImage = await uploadImage({
          folder: "branch-images",
          file: employeeImage,
        }).unwrap();
        imageUrl = uploadedImage;
      }

      const formData = { ...values, image: imageUrl };
      const id = await createEmployee(formData).unwrap();

      if (id) {
        alert("Employee added successfully");
        resetForm();
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      {/* Progress bar at the top */}
      {(companiesLoading || branchesLoading || isSaving) && (
        <LinearProgressBar
          variant="indeterminate"
          color="primary"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1201, // Ensures the progress bar is above all other elements
          }}
        />
      )}

      <Box sx={{ p: 3, maxWidth: 600, mx: "auto", mt: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Add Employee
        </Typography>

        {/* Error messages */}
        {(companiesError || branchesError) && (
          <Typography color="error" sx={{ mb: 2 }}>
            {companiesError || branchesError || "Error loading data."}
          </Typography>
        )}

        <AddEmployeeForm
          onSave={handleSave}
          onImageChange={setEmployeeImage}
          companyOptions={companies.map((c) => ({ id: c.id, label: c.name }))}
          branchOptions={branches.map((b) => ({ id: b.id, label: b.name }))}
          onCompanyChange={setSelectedCompany}
          disabled={isSaving} 
        />
      </Box>
    </>
  );
};

export default AddEmployeeContainer;