import React from "react";
import { Box, Typography } from "@mui/material";
import LinearProgressBar from "./linearProgressBar";

const LinearProgressBarExamples = () => {
  const variants = ["determinate", "indeterminate", "buffer", "query"] as const;
  const colors = ["primary", "secondary", "error", "info", "success", "warning"] as const;
  const exampleValue = 50; // Value for the determinate variant
  const thicknessOptions = [4, 8];

  return (
    <Box sx={{ padding: 2 }}>
      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Variant: {variant}
          </Typography>
          {colors.map((color) => (
            <Box key={`${variant}-${color}`} sx={{ mb: 2 }}>
              <Typography variant="body1" gutterBottom>
                Color: {color}
              </Typography>
              {thicknessOptions.map((thickness) => (
                <Box key={`${variant}-${color}-${thickness}`} sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Thickness: {thickness}px
                  </Typography>
                  <LinearProgressBar
                    variant={variant}
                    color={color}
                    value={variant === "determinate" || variant === "buffer" ? exampleValue : undefined}
                    thickness={thickness}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default LinearProgressBarExamples;
