import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import TextInput from "../shared/textInput/textInput";
import DateInput from "../shared/dateInput/dateInput";
import { employeeInitialValues } from "../initialValues/employeeInitialValues";
import { EmployeeValidationSchema } from "../validationSchemas/employeeValidationSchema";
import ImageUploader from "../shared/ImageUploader/imageUploader";
import { Employee } from "../../interfaces/employee";
import AutoCompleteInput from "../shared/autoComplete/autoCompleteInput";

export interface AddEmployeeFormProps {
  onSave: (values: Employee, helpers: { resetForm: () => void }) => void;
  onImageChange: (file: File | null) => void;
  companyNames: string[];
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onSave, onImageChange, companyNames }) => {
  return (
    <Formik
      initialValues={employeeInitialValues}
      validationSchema={EmployeeValidationSchema}
      onSubmit={onSave}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form>
          <AutoCompleteInput
            label="Company"
            value={values.company}
            onChange={(newValue) => setFieldValue("company", newValue)}
            options={companyNames}
            required
          />
          <TextInput
            label="Branch"
            name="branch"
            value={values.branch}
            onChange={setFieldValue}
            required
          />
          <TextInput
            label="Employee ID"
            name="empId"
            value={values.empId}
            onChange={setFieldValue}
            required
          />
          <TextInput
            label="Name"
            name="name"
            value={values.name}
            onChange={setFieldValue}
            required
          />
          <DateInput
            label="Birthday"
            name="birthday"
            value={values.birthday}
            onChange={setFieldValue}
            required
          />
          <TextInput
            label="NIC"
            name="nic"
            value={values.nic}
            onChange={setFieldValue}
            required
          />

          {/* Image Upload Section */}
          <ImageUploader
            onSelect={(file) => onImageChange(file)}  // Store the selected image file
            uploadedUrl={""}  // You can provide a URL if the employee already has an image
          />

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
  );
};

export default AddEmployeeForm;
