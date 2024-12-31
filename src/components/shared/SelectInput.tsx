import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  error?: boolean;
  required?: boolean;
  options: { label: string; value: string }[]; 
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  name,
  error = false,
  required = false,
  options,
}) => {
  return (
    <FormControl fullWidth margin="normal" required={required} error={error}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
        name={name}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
