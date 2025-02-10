import React from 'react';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { loginValidationSchema } from '../../validationSchema/loginValidationSchema'; 
import TextInput from '../shared/textInput/textInput'; 

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleLogin }) => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" className="login-form-container">
      <h1>{t('login.title')}</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema} 
        onSubmit={async (values, { setSubmitting}) => {
          try {
            await handleLogin(values.email, values.password);
          } catch (error) {
            setSubmitting(false);
        }}
        }
      >
        {({  isSubmitting , touched , errors, isValid}) => (
          <Form>
            <TextInput
              label={t('login.email')}
              name="email"
              errorText={errors.email && touched.email ? errors.email : "" }
              required
            />

            <TextInput
              label={t('login.password')}
              name="password"
              type="password"
              errorText={errors.password && touched.password ? errors.password : ""}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting || !isValid}
            >
              {t('login.submit')}
            </Button>

            <p>
              {t('login.noAccount')}{' '}
              <Link to="/register">{t('login.register')}</Link>.
            </p>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
