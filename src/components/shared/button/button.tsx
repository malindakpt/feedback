import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  text?: string;
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  variant?: "contained" | "outlined" | "text";
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value?: boolean
  ) => void; // Keep MouseEvent compatible
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  variant = "contained",
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event, true); // Pass both the event and the custom value (true)
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
