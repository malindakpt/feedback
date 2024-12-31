import React from 'react';
import { TextField } from '@mui/material';

export interface DateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  name,
  error = false,
  required = false,
  disabled = false,
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
      disabled={disabled}
      type="date" 
      InputLabelProps={{
        shrink: true, 
      }}
    />
  );
};

export default DateInput;
