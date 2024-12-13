import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { PopupType } from '../../enums/popupType.enum';

let snackbarHandler: ((text: string, type: PopupType) => void) | null = null;

const SnackbarComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<PopupType>(PopupType.INFO);

  const showSnackbar = (text: string, popupType: PopupType) => {
    setMessage(text);
    setType(popupType);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  // Register the snackbar handler
  React.useEffect(() => {
    snackbarHandler = showSnackbar;
    return () => {
      snackbarHandler = null; // Clean up on unmount
    };
  }, []);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

// Export the CustomSnackbar component and the showSnackbar function
export const showSnackbar = (text: string, type: PopupType) => {
  if (snackbarHandler) {
    snackbarHandler(text, type);
  } else {
    console.error('Snackbar handler is not registered');
  }
};

export default SnackbarComponent;