import React, { ReactNode } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface ButtonProps extends MuiButtonProps {
  text?: string;
  to?: string;
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  variant?: "contained" | "outlined" | "text";
  startIcon?: ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value?: boolean
  ) => void; // Keep MouseEvent compatible
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  variant = "contained",
  to,
  startIcon,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event, true); // Pass both the event and the custom value (true)
    }
    if (to) {
      navigate(to); // Navigate to the specified route
    }
  };

  return (
    <MuiButton
      color={color}
      variant={variant}
      onClick={handleClick} // Call the wrapped handler
      {...props}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
