import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Container, Typography } from '@mui/material';
import TextInput from '../../shared/textInput/textInput';
import ImageUploader from '../../shared/ImageUploader/imageUploader';
import { CompanyValidationSchema } from '../../../validationSchema/companyValidationSchema';
import { Company } from '../../../interfaces/entities/company';

interface CompanyFormProps {
  initialValues: Company;
  onSubmit: (values: any) => Promise<void>;
  onImageChange: (file: File | null) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ initialValues, onSubmit, onImageChange }) => {
  return (
    <Container maxWidth="sm" className="company-form-container">
      <h1 className="h1-part">Company Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={CompanyValidationSchema}
        onSubmit={onSubmit}
      >
        {({ values, isValid, errors, touched }) => (
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
        )}
      </Formik>
    </Container>
  );
};

export default CompanyForm;
