import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import TextInput from "../../shared/textInput/textInput";
import DateInput from "../../shared/dateInput/dateInput";
import { employeeInitialValues } from "../../initialValues/employeeInitialValues";
import ImageUploader from "../../shared/ImageUploader/imageUploader";
import { Employee } from "../../../interfaces/entities/employee";
import AutoCompleteInput from "../../shared/autoComplete/autoCompleteInput";
import { employeeValidationSchema } from "./validationSchema"; // Import validation schema

export interface AddEmployeeFormProps {
  onSave: (values: Employee, helpers: { resetForm: () => void }) => void;
  onImageChange: (file: File | null) => void;
  companyOptions: { id: string; label: string }[];
  branchOptions: { id: string; label: string }[];
  onCompanyChange: (companyId: string | null) => void;
  disabled?: boolean;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({
  onSave,
  onImageChange,
  companyOptions,
  branchOptions,
  onCompanyChange,
  disabled = false,
}) => {
  return (
    <Formik
      initialValues={employeeInitialValues}
      validationSchema={employeeValidationSchema} // Apply validation schema
      onSubmit={onSave}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <TextInput
            label="User Id"
            name="uid"
            required
            errorText={touched.uid && errors.uid ? errors.uid : ""}
          />
          <TextInput
            label="First Name"
            name="firstName"
            required
            disabled={!values.uid || disabled}
            errorText={touched.firstName && errors.firstName ? errors.firstName : ""}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            required
            disabled={!values.firstName || disabled}
            errorText={touched.lastName && errors.lastName ? errors.lastName : ""}
          />
          <AutoCompleteInput
            label="Company"
            name="companyId"
            options={companyOptions}
            required
            disabled={!values.lastName || disabled}
            onChange={(name, newValue) => {
              setFieldValue(name, newValue);
              setFieldValue("branchId", ""); // Reset branchId when company changes
              onCompanyChange(newValue);
            }}
          />
          <AutoCompleteInput
            label="Branch"
            name="branchId"
            options={branchOptions}
            required
            disabled={!values.companyId || disabled}
            onChange={(name, newValue) => setFieldValue(name, newValue)}
          />
          <TextInput
            label="Position"
            name="position"
            required
            disabled={!values.branchId || disabled}
            errorText={touched.position && errors.position ? errors.position : ""}
          />
          <DateInput
            label="Birthday"
            name="birthday"
            required
            disabled={!values.position || disabled}
            errorText={touched.birthday && errors.birthday ? errors.birthday : ""}
          />
          <TextInput
            label="NIC"
            name="nic"
            required
            disabled={!values.birthday || disabled}
            errorText={touched.nic && errors.nic ? errors.nic : ""}
          />
          <TextInput
            label="Email"
            name="email"
            required
            disabled={!values.nic || disabled}
            errorText={touched.email && errors.email ? errors.email : ""}
          />
          
          <ImageUploader
            onChange={onImageChange}
            uploadedUrl=""
            disabled={disabled}
            name="employeeImage"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={disabled}
          >
            Add Employee
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddEmployeeForm;
