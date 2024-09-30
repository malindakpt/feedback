import React from 'react';
import { TextField } from '@mui/material';

export interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  error?: boolean;
  required?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  name,
  error = false,
  required = false,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name={name}
      error={error}
      required={required}
      variant="outlined"
      fullWidth
      margin="normal"
      type="number"
    />
  );
};

export default NumberInput;
