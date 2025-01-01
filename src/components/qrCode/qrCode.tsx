import * as React from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

interface QrCodePopupProps {
  open: boolean;
  onClose: () => void;
  qrValue: string; 
  title?: string; 
  heading?: string; 
  subheading?: string; 
}

const QrCodePopup: React.FC<QrCodePopupProps> = ({
  open,
  onClose,
  qrValue,
  title = "",
  heading = "",
  subheading = "",
}) => {
  const downloadDetails = () => {
    const htmlContent = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body>
          <h1>${heading}</h1>
          <p>${subheading}</p>
          <p>QR Value: ${qrValue}</p>
          <div style="text-align: center;">
            <img src="${document.querySelector("canvas")?.toDataURL("image/png")}" alt="QR Code" />
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qr_code_details.html";
    link.click();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h6">{heading}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {subheading}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            QR Value: {qrValue}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <QRCodeCanvas value={qrValue} size={150} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={downloadDetails} variant="contained" color="primary">
          Download Details
        </Button>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QrCodePopup;
