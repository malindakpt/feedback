import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
}) => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" className="login-form-container" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('login.title')}
      </Typography>
      <TextField
        label={t('login.email')}
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label={t('login.password')}
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        {t('login.submit')}
      </Button>

      <Link to="/forgotpassword" style={{ textDecoration: 'none', marginTop: '1rem', display: 'block' }}>
        {t('login.forgotPassword')}
      </Link>
      <p>
      {t('login.noAccount')}{' '}
        <Link to="/register">{t('login.register')}</Link>.
      </p>

    </Container>
  );
};

export default LoginForm;
