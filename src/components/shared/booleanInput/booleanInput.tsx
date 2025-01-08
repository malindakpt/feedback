import React from "react";
import { styled, Switch } from "@mui/material";
import { useFormikContext } from "formik";

export interface BooleanInputProps {
  name: string;
  errorText?: string | false;
  disabled?: boolean;
}

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#4caf50",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: 12,
    backgroundColor: "#bdbdbd",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 200,
    }),
  },
}));

const BooleanInput: React.FC<BooleanInputProps> = ({
  name,
  errorText,
  disabled = false,
}) => {
  const formikProps = useFormikContext<Record<string, any>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formikProps?.setFieldValue) {
      formikProps.setFieldValue(name, e.target.checked);
    }
  };

  const fieldValue = formikProps?.values[name] ?? false;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <StyledSwitch
        checked={fieldValue}
        onChange={handleChange}
        name={name}
        disabled={disabled}
      />
      {errorText && (
        <div style={{ color: "red", marginTop: "8px" }}>{errorText}</div>
      )}
    </div>
  );
};

export default BooleanInput;
