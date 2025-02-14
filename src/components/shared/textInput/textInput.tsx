import React from 'react';
import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';

export interface TextInputProps {
  label: string;
  name: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
  errorText?: string | false;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  required = false,
  type = 'text',
  errorText,
  disabled = false,
}) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formikProps = useFormikContext<any>()

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formikProps && formikProps.handleBlur) {
      formikProps.handleBlur(e);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formikProps && formikProps.setFieldValue) {
      if (type === 'number') {
        formikProps.setFieldValue(name, Number(e.target.value));
      } else {
        formikProps.setFieldValue(name, e.target.value);
      }
    }
  };

  const fieldValue = formikProps ? formikProps.values[name] : '';

  return (
    <TextField
      label={label}
      value={fieldValue}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      required={required}
      variant="outlined"
      fullWidth
      margin="normal"
      type={type}
      error={Boolean(errorText)}
      helperText={errorText || ''}
      disabled={disabled}
    />
  );
};

export default TextInput;