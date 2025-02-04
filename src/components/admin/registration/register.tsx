import React from 'react';
import { Formik, Form } from 'formik';
import AutoCompleteInput from '../../shared/autoComplete/autoCompleteInput';
import TextInput from '../../shared/textInput/textInput';
import { Button, Container, Typography } from '@mui/material';
import { registerValidationSchema } from '../../../validationSchema/registerValidationSchema';
import { defaultRegister } from './defaultRegister';
import ImageUploader from '../../shared/ImageUploader/imageUploader'; // Import ImageUploader
import { positionOptions } from '../../utils/employeePosition';
import DateInput from '../../shared/dateInput/dateInput';
import BranchSelector from '../../shared/branchSelector/branchSelector';

interface RegisterFormProps {
  handleRegister: (values: any) => Promise<void>;
  onImageChange: (file: File | null) => void;
  companyOptions: { id: string; label: string }[];
}

const RegisterForm: React.FC<RegisterFormProps> = ({ handleRegister , companyOptions ,onImageChange }) => {

 return (
    <Container maxWidth="sm" className="register-form-container">
      <h1 className="h1-part">Register Here</h1>
      <Formik
        initialValues={{ ...defaultRegister, image: '' }} // Add profileImage to initialValues
        validationSchema={registerValidationSchema}
        onSubmit={handleRegister}
      >
      {({ values, setFieldValue, isValid, errors , touched }) => {
        console.log(values); 

return (
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
              label="NIC"
              name="nic"
              errorText={errors.nic && touched.nic ? errors.nic : ""}
            />
            <DateInput
              label="Date of Birth"
              name="birthday"
              errorText={errors.birthday && touched.birthday ? errors.birthday : ""}
              required
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
              name={'companyId'}
            />
            <BranchSelector
             companyId={values.companyId}
             onChange={setFieldValue}
             required
             disabled={!values.companyId}
            />
            <AutoCompleteInput
              label="Position"
              onChange={setFieldValue}
              options={positionOptions}
              required
              disabled={!values.companyId} 
              name="position" 
            />            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Profile Image
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
              Register
            </Button>
          </Form>
        )}}
      </Formik>
    </Container>
  );
};

export default RegisterForm;