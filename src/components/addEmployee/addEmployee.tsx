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
        const isCompanySelected = !!values.company;
        const isBranchSelected = !!values.branch;
        const isEmployeeIDEntered = !!values.empId;
        const isNameEntered = !!values.name;
        const isBirthdayEntered = !!values.birthday;

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
              disabled={!isCompanySelected}
            />
            <TextInput
              label="Employee ID"
              name="empId"
              value={values.empId}
              onChange={setFieldValue}
              required
              disabled={!isBranchSelected}
            />
            <TextInput
              label="Name"
              name="name"
              value={values.name}
              onChange={setFieldValue}
              required
              disabled={!isEmployeeIDEntered}
            />
            <DateInput
              label="Birthday"
              name="birthday"
              value={values.birthday}
              onChange={setFieldValue}
              required
              disabled={!isNameEntered}
            />
            <TextInput
              label="NIC"
              name="nic"
              value={values.nic}
              onChange={setFieldValue}
              required
              disabled={!isBirthdayEntered}
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
