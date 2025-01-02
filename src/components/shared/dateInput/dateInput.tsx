import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

export interface DateInputProps {
  label: string;
  name: string; // Required for Formik integration
  required?: boolean;
  disabled?: boolean;
}

const DateInput = ({
  label,
  name,
  required = false,
  disabled = false,
}: DateInputProps) => {
  const [field, meta] = useField(name);

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
      error={!!meta.error && meta.touched}
      helperText={meta.touched && meta.error ? meta.error : ""}
    />
  );
};

export default DateInput;

