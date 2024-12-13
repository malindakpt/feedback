import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ForgotPasswordProps {
  onResetPassword: (email: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onResetPassword }) => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = () => {
    if (!email) {
      alert(t('forgotPassword.enterEmail'));
      return;
    }
    onResetPassword(email);
  };

  return (
    <Container maxWidth="sm" className="forgot-password-container" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('forgotPassword.title')}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {t('forgotPassword.instructions')}
      </Typography>
      <TextField
        label={t('forgotPassword.email')}
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        {t('forgotPassword.resetButton')}
      </Button>
    </Container>
  );
};

export default ForgotPassword;
