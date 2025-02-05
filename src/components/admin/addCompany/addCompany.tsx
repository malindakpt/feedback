import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Container, Typography } from '@mui/material';
import TextInput from '../../shared/textInput/textInput';  
import ImageUploader from '../../shared/ImageUploader/imageUploader'; 
import { defaultCompany } from './defaultCompany';
import { CompanyValidationSchema } from '../../../validationSchema/companyValidationSchema';

interface AddCompanyFormProps {
    onSubmit: (values: any) => Promise<void>;
    onImageChange: (file: File | null) => void;
}

const AddCompanyForm: React.FC<AddCompanyFormProps> = ({ onSubmit ,onImageChange }) => {

  return (
    <Container maxWidth="sm" className="register-form-container">
      <h1 className="h1-part">Add Company</h1>
      <Formik
        initialValues={{ ...defaultCompany, image: '' }} // Add profileImage to initialValues
        validationSchema={CompanyValidationSchema}
        onSubmit={onSubmit}
      >
      {({ values, isValid, errors , touched }) => {

        return (
          <Form>
            <TextInput
              label="Company Name"
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
              Company Image
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
        )}}
      </Formik>
    </Container>
  );
};

export default AddCompanyForm;
