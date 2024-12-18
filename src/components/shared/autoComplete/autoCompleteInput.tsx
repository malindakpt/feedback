import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export interface AutoCompleteInputProps {
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
  options: string[]; 
  required?: boolean; 
  validateInput?: (value: string) => string; 
  disabled?: boolean;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
  validateInput,
  disabled = false,
}) => {
  const [errorText, setErrorText] = useState<string>('');

  const handleBlur = () => {
    if (validateInput) {
      const error = validateInput(value);
      setErrorText(error);
    }
  };

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => {
        onChange(newValue || '');
      }}
      onBlur={handleBlur}
      options={options}
      fullWidth
      ListboxProps={{
        style: {
          maxHeight: '140px', 
          overflow: 'auto', 
        },
      }}
      disabled={disabled}
      
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          required={required}
          error={Boolean(errorText)}
          helperText={errorText || ''}
          margin="normal"
          
        />
      )}
    />
  );
};

export default AutoCompleteInput;
