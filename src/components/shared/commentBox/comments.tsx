import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useField } from "formik";

export interface CommentBoxProps {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  predefinedTexts?: string[];
}

const CommentBox = ({
  label,
  name,
  required = false,
  disabled = false,
  predefinedTexts = [
    "Actually the service is very good.",
    "Excellent service.",
    "Great experience.",
    "Very satisfied.",
    "Highly recommended.",
    "Outstanding job.",
    "Very poor.",
    "Needs improvement.",
    "Disappointing experience.",
    "Slow service.",
    "Unhelpful staff.",
  ],
}: CommentBoxProps) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue } = helpers;

  const handleAddText = (text: string) => {
    setValue(value ? `${value} ${text}` : text);
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
    >
      <div>
        <TextField
          {...field}
          label={label}
          required={required}
          multiline
          rows={4}
          disabled={disabled}
          error={!!meta.error && meta.touched}
          helperText={meta.touched && meta.error ? meta.error : ""}
        />
      </div>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        sx={{ m: 1 }}
        useFlexGap
        flexWrap="wrap"
      >
        {predefinedTexts.map((text, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleAddText(text)}
            disabled={disabled}
          >
            {text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CommentBox;
