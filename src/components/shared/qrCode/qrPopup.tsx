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
  imageUrl?: string;
}

const QrCodePopup: React.FC<QrCodePopupProps> = ({
  open,
  onClose,
  qrValue,
  title = "",
  heading = "",
  subheading = "",
  imageUrl,
}) => {
  const printPopupContent = () => {
    const qrCodeCanvas = document.querySelector("canvas")?.toDataURL();


    const popupWindow = window.open("", "_blank");
    if (popupWindow) {
      popupWindow.document.open();
      popupWindow.document.write(`
        <html>
          <head>
            <title>Print QR Code</title>
            <style>
              body {
                text-align: center;
                font-family: Arial, sans-serif;
                padding: 20px;
              }
              h1, h2, p {
                margin: 10px 0;
              }
              img {
                margin-top: 20px;
              }

              
            </style>
          </head>
          <body>
            <h1>${title}</h1>
            <h2>${heading}</h2>
            <p>${subheading}</p>
            <p><strong>QR Value:</strong> ${qrValue}</p>
            ${imageUrl ? `<img src="${imageUrl}" alt="Retrieved Image" width="200" height="200"/>` : "" }

            <div>
               ${qrCodeCanvas ? `<img src="${qrCodeCanvas}" alt="QR Code" width="150" height="150" />` : ""}
            </div>
            <script>
              window.onload = function() {
                window.print();
                window.close();
              }
            </script>
          </body>
        </html>
      `);
      popupWindow.document.close();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h6"  sx={{ fontSize: { xs: "16px", sm: "20px" } }}>{heading}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {subheading}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            QR Value: {qrValue}
          </Typography>
          {imageUrl && (
            <Box sx={{ mt: 2 }}>
              <img
                src={imageUrl}
                alt="Retrieved Image"
                style={{ width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  objectFit: "cover", }}
              />
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <QRCodeCanvas value={qrValue} size={150} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={printPopupContent} variant="contained" color="primary">
          Print
        </Button>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QrCodePopup;

