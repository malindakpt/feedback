import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

export interface DateInputProps {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  errorText?: string | false; 
}

const DateInput = ({
  label,
  name,
  required = false,
  disabled = false,
  errorText,
}: DateInputProps) => {
  const [field, meta] = useField(name);

  const showError = !!meta.error && meta.touched;
  const helperText = errorText || (showError ? meta.error : "");

  return (
    <TextField
      {...field}
      label={label}
      required={required}
      disabled={disabled}
      variant="outlined"
      fullWidth
      margin="normal"
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
      error={!!helperText}
      helperText={helperText}
    />
  );
};

export default DateInput;
