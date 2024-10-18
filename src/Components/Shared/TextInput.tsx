import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  required?: boolean;
  type?: string;
  error?: boolean;
  helperText?: string;
  onBlur?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  name,
  required = false,
  type = 'text',
  error = false,
  helperText = '',
  onBlur,

}) => {
  

  
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      name={name}
      error={error}
      helperText={helperText}
      required={required}
      variant="outlined"
      fullWidth
      margin="normal"
      type={type}
    />
  );
};

export default TextInput;