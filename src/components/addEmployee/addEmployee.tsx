import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../shared/textInput/textInput";
import DateInput from "../shared/dateInput/dateInput";
import ImageUploader from "../shared/ImageUploader/imageUploader";
import { createEntity } from "../../services/crudService";
import { Collection } from "../../enums/collections.enum";

const AddEmployee: React.FC = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    company: Yup.string().required("Company is required"),
    branch: Yup.string().required("Branch is required"),
    empId: Yup.string().required("Employee ID is required"),
    name: Yup.string().required("Name is required"),
    birthday: Yup.string().required("Birthday is required"),
    nic: Yup.string().required("NIC is required"),
    employeeImage: Yup.mixed().required("Employee image is required"), // Add validation for image
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const id = await createEntity(Collection.Employee, values);
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
      <Formik
        initialValues={{
          company: "",
          branch: "",
          empId: "",
          name: "",
          birthday: "",
          nic: "",
          employeeImage: null, // Initialize image state
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <TextInput
              label="Company"
              value={values.company}
              onChange={(value) => setFieldValue("company", value)}
              required
            />
            <TextInput
              label="Branch"
              value={values.branch}
              onChange={(value) => setFieldValue("branch", value)}
              required
            />
            <TextInput
              label="Employee ID"
              value={values.empId}
              onChange={(value) => setFieldValue("empId", value)}
              required
            />
            <TextInput
              label="Name"
              value={values.name}
              onChange={(value) => setFieldValue("name", value)}
              required
            />
            <DateInput
              label="Birthday"
              value={values.birthday}
              onChange={(value) => setFieldValue("birthday", value)}
              required
            />
            <TextInput
              label="NIC"
              value={values.nic}
              onChange={(value) => setFieldValue("nic", value)}
              required
            />

            {/* Add ImageUploader Field */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Employee Image
              </Typography>
              <ImageUploader
                onSelect={(file) => setFieldValue("employeeImage", file)}
                uploadedUrl={null} // Optional: provide an uploaded URL if editing
              />
              {errors.employeeImage && touched.employeeImage && (
                <Typography color="error" variant="caption">
                  {errors.employeeImage}
                </Typography>
              )}
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Add Employee
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddEmployee;
