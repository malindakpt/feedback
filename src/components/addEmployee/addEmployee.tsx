import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import TextInput from "../shared/textInput/textInput";
import DateInput from "../shared/dateInput/dateInput";
import { employeeInitialValues } from "../initialValues/employeeInitialValues";
//import { EmployeeValidationSchema } from "../validationSchemas/employeeValidationSchema";
import ImageUploader from "../shared/ImageUploader/imageUploader";
import { Employee } from "../../interfaces/employee";
import AutoCompleteInput from "../shared/autoComplete/autoCompleteInput";

export interface AddEmployeeFormProps {
  onSave: (values: Employee, helpers: { resetForm: () => void }) => void;
  onImageChange: (file: File | null) => void;
  company: string[];
  branch: string[];
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({
  onSave,
  onImageChange,
  company,
  branch,
}) => {
  return (
    <Formik
      initialValues={employeeInitialValues}
      //validationSchema={EmployeeValidationSchema}
      onSubmit={onSave}
    >
      {({ values, errors, touched, setFieldValue }) => {
        
        return (
          <Form>
            <AutoCompleteInput
              label="Company"
              value={values.company}
              onChange={(newValue) => setFieldValue("company", newValue)}
              options={company}
              required
            />
            <AutoCompleteInput
              label="Branch"
              value={values.branch}
              onChange={(newValue) => setFieldValue("branch", newValue)}
              options={branch}
              required
              disabled={!values.company}
            />
            <TextInput
              label="Employee ID"
              name="empId"
              value={values.empId}
              onChange={setFieldValue}
              required
              disabled={!values.branch}
            />
            <TextInput
              label="Name"
              name="name"
              value={values.name}
              onChange={setFieldValue}
              required
              disabled={!values.empId}
            />
            <DateInput
              label="Birthday"
              name="birthday"
              value={values.birthday}
              onChange={setFieldValue}
              required
              disabled={!values.name}
            />
            <TextInput
              label="NIC"
              name="nic"
              value={values.nic}
              onChange={setFieldValue}
              required
              disabled={!values.birthday}
            />
            <ImageUploader
              onSelect={(file) => onImageChange(file)}
              uploadedUrl=""
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
        );
      }}
    </Formik>
  );
};

export default AddEmployeeForm;
