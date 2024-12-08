import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  text?: string;
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  variant?: "contained" | "outlined" | "text";
  onButtonClick?: (name: string, value:boolean) => void; // Renamed custom handler
  name: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  variant = "contained",
  onButtonClick,
  name,
  ...props
}) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick(name, true); // Simulating a "value" change to `true` on button click
    }
  };

  return (
    <MuiButton color={color} variant={variant} onClick={handleClick} {...props}>
      {text}
    </MuiButton>
  );
};

export default Button;
