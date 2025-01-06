import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { AutoCompleteOption } from '../../../interfaces/autoCompleteOptions';
import { useFormikContext } from 'formik';

export interface AutoCompleteInputProps {
  label: string;
  name: string;
  options: AutoCompleteOption[];
  onChange?: (value: string) => void;
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
  onChange, // Ensure the prop is destructured
}) => {
  const { values, setFieldValue, errors, touched, handleBlur } = useFormikContext<any>();
  const selectedOption = options.find((option) => option.id === values[name]) || null;
  const [errorText, setErrorText] = useState<string>('');

  const handleFieldBlur = () => {
    if (validateInput) {
      const error = validateInput(values[name]);
      setErrorText(error);
    }
    handleBlur({ target: { name } }); // Ensures Formik's `handleBlur` is triggered
  };

  return (
    <Autocomplete
      value={selectedOption}
      onChange={(_, newValue) => {
        const newValueId = newValue?.id || '';
        setFieldValue(name, newValueId);
        if (onChange) {
          onChange(newValueId); // Call the passed onChange prop
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
