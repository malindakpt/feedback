import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export interface LinearProgressBarProps {
  value?: number;
  variant?: "determinate" | "indeterminate" | "buffer" | "query";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  thickness?: number;
  sx?: object;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
  value,
  variant = "indeterminate",
  color = "primary",
  thickness = 4,
  sx = {},
}) => {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <LinearProgress
        variant={variant}
        value={value}
        color={color}
        sx={{
          height: thickness,
        }}
      />
    </Box>
  );
};

export default LinearProgressBar;
