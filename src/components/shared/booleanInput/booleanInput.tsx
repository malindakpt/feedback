import React from "react";
import { styled, Switch } from "@mui/material";

export interface BooleanInputProps {
  value: boolean;
  onChange: (name: string, value: boolean) => void;
  name: string;
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
  value,
  onChange,
  name,
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(name, e.target.checked);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <StyledSwitch
        checked={value}
        onChange={handleChange}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

export default BooleanInput;
