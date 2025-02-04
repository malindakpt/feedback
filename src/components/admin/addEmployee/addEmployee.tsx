import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import TextInput from "../../shared/textInput/textInput";
import DateInput from "../../shared/dateInput/dateInput";
import { employeeInitialValues } from "../../initialValues/employeeInitialValues";
import ImageUploader from "../../shared/ImageUploader/imageUploader";
import { Employee } from "../../../interfaces/entities/employee";
import AutoCompleteInput from "../../shared/autoComplete/autoCompleteInput";

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
    <Formik initialValues={employeeInitialValues} onSubmit={onSave}>
      {({ values, setFieldValue }) => (
        <Form>
          <TextInput
            label="User Id"
            name="uid" // Ensure this matches your initial values
            required
          />
          <TextInput
            label="First Name"
            name="firstName" // Ensure this matches your initial values
            required
            disabled={!values.uid || disabled}
          />
          <TextInput
            label="Last Name"
            name="lastName" // Ensure this matches your initial values
            required
            disabled={!values.firstName || disabled}
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
            }
          }
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
          />
          <DateInput
            label="Birthday"
            name="birthday"
            required
            disabled={!values.position || disabled}
          />
          <TextInput
            label="NIC"
            name="nic"
            required
            disabled={!values.birthday || disabled}
          />
          <TextInput
            label="Email"
            name="email"
            required
            disabled={!values.nic || disabled}
          />
          <ImageUploader
            onChange={onImageChange} // Pass the onImageChange prop
            uploadedUrl="" // You can set this to the URL of the uploaded image if applicable
            disabled={disabled}
            name="employeeImage" // Optional: name for the input
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