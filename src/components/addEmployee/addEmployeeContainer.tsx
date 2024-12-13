import React, { useState , useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { createEntity } from "../../services/crudService";
import { Collection } from "../../enums/collections.enum";
import { uploadImage } from "../../services/imageUploaderService";
import AddEmployeeForm from "./addEmployee";
import { Employee } from "../../interfaces/employee";
import { readAllEntity } from "../../services/crudService";
import {Company} from "../../interfaces/company"
import { Branch } from "../../interfaces/branch";

const AddEmployeeContainer: React.FC = () => {
  const [employeeImage, setEmployeeImage] = useState<File | null>(null);
  const [companyNames, setCompanyNames] = useState<string[]>([]);
  const [branchNames, setBranchNames] = useState<string[]>([]);

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

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const branches = await readAllEntity<Branch>(Collection.Branches);
        if (branches) {
          setBranchNames(branches.map((branch) => branch.name));
        }
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);

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
      <AddEmployeeForm onSave={handleSave} onImageChange={setEmployeeImage} company={companyNames} branch={branchNames}/>
    </Box>
  );
};

export default AddEmployeeContainer;