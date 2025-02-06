import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Container, Typography } from '@mui/material';
import TextInput from '../shared/textInput/textInput';
import ImageUploader from '../shared/ImageUploader/imageUploader';
import { BranchValidationSchema } from '../../validationSchema/branchValidationSchema copy';
import { Branch } from '../../interfaces/entities/branch';
import AutoCompleteInput from '../shared/autoComplete/autoCompleteInput';

interface BranchFormProps {
  initialValues: Branch;
  onSubmit: (values: any) => Promise<void>;
  onImageChange: (file: File | null) => void;
  companyOptions: { id: string; label: string }[];
}

const BranchForm: React.FC<BranchFormProps> = ({ initialValues, onSubmit, onImageChange, companyOptions }) => {
  return (
    <Container maxWidth="sm" className="branch-form-container">
      <h1 className="h1-part">Branch Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={BranchValidationSchema}
        onSubmit={onSubmit}
      >

        {({ values, isValid, errors, touched, setFieldValue }) => (
          <Form>
           <AutoCompleteInput
              label="Company"
              onChange={setFieldValue}
              options={companyOptions}
              required 
              name={'companyId'}
            />     
            <TextInput
              label="Branch Name"
              name="name"
              errorText={errors.name && touched.name ? errors.name : ""}
            />
            <TextInput
              label="Contact Number"
              name="number"
              errorText={errors.number && touched.number ? errors.number : ""}
            />
            <TextInput
              label="Address"
              name="address"
              errorText={errors.address && touched.address ? errors.address : ""}
            />
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Branch Image
            </Typography>
            <ImageUploader
              name="image"
              uploadedUrl={values.image}
              onChange={onImageChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isValid}
              fullWidth
              className="register-button"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default BranchForm;
