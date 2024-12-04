// src/components/branch/addBranchForm.tsx

import React from "react";
import { Formik, Form } from "formik";
import { Button, Typography } from "@mui/material";
import TextInput from "../../shared/textInput/textInput";
import ImageUploader from "../../shared/ImageUploader/imageUploader";
import { Branch } from "../../../interfaces/branch";
import { defaultBranch } from "./defaultBranch";
import { branchValidationSchema } from "../../validationSchema/branchValidationSchema";

interface AddBranchFormProps {
  onSave: (values: Branch, helpers:{resetForm:() => void}  ) => void;
  onImageChange: (file: File | null) => void;
}

const AddBranchForm: React.FC<AddBranchFormProps> = ({ onSave, onImageChange }) => {
  
  return (
    <Formik
      initialValues={defaultBranch}
      validationSchema={branchValidationSchema}
      onSubmit={onSave}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <TextInput
            label="Company"
            name="company"
            value={values.company}
            onChange={setFieldValue}
            required
          />
          <TextInput
            label="Branch Name"
            name="branchName"
            value={values.branchName}
            onChange={setFieldValue}
            required
          />
          <TextInput
            label="Location"
            name="location"
            value={values.location}
            onChange={setFieldValue}
            required
          />
          <TextInput
            label="Contact Number"
            name="contactNumber"
            value={values.contactNumber}
            onChange={setFieldValue}
            required
          />

          {/* Image Upload Section */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Branch Image
          </Typography>
          <ImageUploader
            onSelect={(file) => onImageChange(file)}
            uploadedUrl={""}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Branch
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddBranchForm;
