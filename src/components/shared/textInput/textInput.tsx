import React, { useState } from 'react';
import { TextField } from '@mui/material';

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  required?: boolean;
  type?: string;
  validateInput?: (value: string) => string;
  disabled?: boolean;

  
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  name,
  required = false,
  type = 'text',
  validateInput,
  disabled = false,

}) => {

  const [errorText, setErrorText] = useState<string>('');

  const handleBlur = () => {
    if (validateInput) {
      const error = validateInput(value);
      setErrorText(error);
    }
  }
  

  
  return (
    
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={handleBlur}
      name={name}
      required={required}
      variant="outlined"
      fullWidth
      margin="normal"
      type={type}
      error={Boolean(errorText)}
      helperText={errorText || ''}
      disabled = {disabled}
      
      
    />
  );
};

export default TextInput;