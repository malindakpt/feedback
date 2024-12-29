import React from "react";
import { Formik, Form } from "formik";
import { Button, Typography } from "@mui/material";
import TextInput from "../../shared/textInput/textInput";
import ImageUploader from "../../shared/ImageUploader/imageUploader";
import { Branch } from "../../../interfaces/branch";
import { defaultBranch } from "./defaultBranch";
import { branchValidationSchema } from "../../validationSchema/branchValidationSchema";
import AutoCompleteInput from "../../shared/autoCompleteInput";



export interface AddBranchFormProps {
  onSave: (values: Branch, helpers:{resetForm:() => void}  ) => void;
  onImageChange: (file: File | null) => void;
  company: string[];
}



const AddBranch: React.FC<AddBranchFormProps> = ({ onSave, onImageChange , company }) => {
  
  return (
    <Formik
      initialValues={defaultBranch}
      validationSchema={branchValidationSchema}
      onSubmit={onSave}
      validateOnBlur
      validateOnChange
      
    >
      {({ values, setFieldValue , isValid , dirty , errors , touched }) => (
        <Form>
          <AutoCompleteInput
              label="Company"
              value={values.company}
              onChange={(newValue) => setFieldValue("company", newValue)}
              options={company}
              required
            />
          <TextInput
            label="Branch ID"
            name="branchId"
            
            errorText={errors.branchId && touched.branchId ? errors.branchId : ""}
  
          />
          <TextInput
            label="Branch Name"
            name="branchName"
            
            errorText={ errors.branchId && touched.branchName ? errors.branchName : ""}
            
          />
          
          <TextInput
            label="Location"
            name="location"
            
            errorText={errors.location && touched.location ? errors.location : ""}
            
          />
          <TextInput
            label="Contact Number"
            name="contactNumber"
            
            errorText={errors.contactNumber && touched.contactNumber ? errors.contactNumber : "" }
            
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
            disabled={!isValid || !dirty}
          >
            Add Branch
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddBranch;
