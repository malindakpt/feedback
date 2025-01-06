import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { AutoCompleteOption } from '../../../interfaces/autoCompleteOptions';
import { useFormikContext } from 'formik';

export interface AutoCompleteInputProps {
  label: string;
  name: string;
  options: AutoCompleteOption[];
  onChange?: (name: string, newValue: string) => void;
  required?: boolean;
  validateInput?: (value: string) => string;
  disabled?: boolean;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  label,
  name,
  options,
  required = false,
  validateInput,
  disabled = false,
  onChange, 
}) => {
  const { values, setFieldValue, errors, touched, handleBlur } = useFormikContext<any>();
  const selectedOption = options.find((option) => option.id === values[name]) || null;
  const [errorText, setErrorText] = useState<string>('');

  const handleFieldBlur = () => {
    if (validateInput) {
      const error = validateInput(values[name]);
      setErrorText(error);
    }
    handleBlur({ target: { name } }); 
  };

  return (
    <Autocomplete
      value={selectedOption}
      onChange={(_, newValue) => {
        const newValueId = newValue?.id || '';
        setFieldValue(name, newValueId);
        if (onChange) {
          onChange(name, newValueId); 
        }
      }}
      onBlur={handleFieldBlur}
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
          error={Boolean(errors[name] && touched[name]) || Boolean(errorText)}
          helperText={errorText || ''}
          margin="normal"
        />
      )}
    />
  );
};

export default AutoCompleteInput;
