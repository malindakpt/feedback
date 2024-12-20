import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { createEntity, readAllEntity } from "../../services/crudService";
import { Collection } from "../../enums/collections.enum";
import { uploadImage } from "../../services/imageUploaderService";
import AddEmployeeForm from "./addEmployee";
import { Employee } from "../../interfaces/employee";
import { useFetchCompany } from "../../hooks/useFetchCompanies";
import { useFetchBranch } from "../../hooks/useFetchBranches";

const AddEmployeeContainer: React.FC = () => {
  const [employeeImage, setEmployeeImage] = useState<File | null>(null);
  const { companies } = useFetchCompany();
  const { branches } = useFetchBranch();
  // const [companyNames, setCompanyNames] = useState<string[]>([]);
  // const [branchNames, setBranchNames] = useState<string[]>([]);

   // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const companies = await readAllEntity<Company>(Collection.Companies);
  //       if (companies) {
  //         setCompanyNames(companies.map((company) => company.name));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching companies:", error);
  //     }
  //   };

  //   fetchCompanies();
  // }, []);

  // useEffect(() => {
  //   const fetchBranches = async () => {
  //     try {
  //       const branches = await readAllEntity<Branch>(Collection.Branches);
  //       if (branches) {
  //         setBranchNames(branches.map((branch) => branch.name));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching branches:", error);
  //     }
  //   };

  //   fetchBranches();
  // }, []);

  const handleSave = async (
    values: Employee,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      // Fetch all employees
      const existingEmployees = await readAllEntity<Employee>(Collection.Employee);
  
      // Ensure existingEmployees is defined and is an array
      if (existingEmployees && Array.isArray(existingEmployees)) {
        // Check for duplicate empId
        const isDuplicateEmpId = existingEmployees.some(
          (employee) => employee.empId === values.empId
        );
  
        if (isDuplicateEmpId) {
          alert("The Employee ID is already in use. Please use a unique ID.");
          return;
        }
      } else {
        console.error("Error: Failed to fetch employees or data is invalid.");
        return;
      }
  
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
      <AddEmployeeForm
        onSave={handleSave}
        onImageChange={setEmployeeImage}
        company={companies.map((company) => company.name)}
        branch={branches.map((branch) => branch.name)}
      />
    </Box>
  );
};

export default AddEmployeeContainer;
