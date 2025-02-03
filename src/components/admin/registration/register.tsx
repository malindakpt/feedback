import React from 'react';
import { Formik, Form } from 'formik';
import AutoCompleteInput from '../../shared/autoComplete/autoCompleteInput';
import TextInput from '../../shared/textInput/textInput';
import { Button, Container, Typography } from '@mui/material';
import { registerValidationSchema } from '../../../validationSchema/registerValidationSchema';
import { defaultRegister } from './defaultRegister';
import ImageUploader from '../../shared/ImageUploader/imageUploader'; // Import ImageUploader
import { positionOptions } from '../../utils/employeePosition';

interface RegisterFormProps {
  handleRegister: (values: any) => Promise<void>;
  onImageChange: (file: File | null) => void;
  companyOptions: { id: string; label: string }[];
}

const RegisterForm: React.FC<RegisterFormProps> = ({ handleRegister , companyOptions ,onImageChange }) => {
  const branchOptions = [
    { id: '1', label: 'Branch 1' },
    { id: '2', label: 'Branch 2' },
    { id: '3', label: 'Branch 3' }
  ];

  return (
    <Container maxWidth="sm" className="register-form-container">
      <h1 className="h1-part">Register Here</h1>
      <Formik
        initialValues={{ ...defaultRegister, profileImage: '' }} // Add profileImage to initialValues
        validationSchema={registerValidationSchema}
        onSubmit={handleRegister}
      >
        {({ values, setFieldValue, isValid, errors , touched }) => (
          <Form>
            <TextInput
              label="First Name"
              name="firstName"
              errorText={errors.firstName && touched.firstName ? errors.firstName : ""}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              errorText={errors.lastName && touched.lastName ? errors.lastName : ""}
            />
            <TextInput
              label="Email"
              name="email"
              errorText={errors.email && touched.email ? errors.email : ""}
              type="email"
              required
            />
            <TextInput
              label="Password"
              name="password"
              errorText={errors.password && touched.password ? errors.password : ""}
              type="password"
              required
            />
             <AutoCompleteInput
              label="Company"
              onChange={setFieldValue}
              options={companyOptions}
              required 
              name={'company'}            />
            <AutoCompleteInput
              label="Branch"
              onChange={setFieldValue}
              options={branchOptions}
              required
              disabled={!values.company} 
              name={'branch'}            />
            <AutoCompleteInput
              label="Position"
              onChange={setFieldValue}
              options={positionOptions}
              required
              disabled={!values.company} 
              name="position" 
            />            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Profile Image
            </Typography>
            <ImageUploader
             name="profileImage"
             uploadedUrl={values.profileImage}
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;