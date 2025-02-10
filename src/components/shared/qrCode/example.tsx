import React from "react";
import { Box } from "@mui/material";
import QrCodePopup from "./qrPopup"; // Import reusable popup

const Example: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const currentUrl = window.location.href; 

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleOpenPopup}
        sx={{ display: "flex", alignItems: "center" }}
      >
        Show QR Code
      </Button> */}

      <img
        src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?t=st=1736315311~exp=1736318911~hmac=9624f63cd7cd198e2bed3fb543ad418f21c7102d79056a5248907bfcf33138ef&w=740"
        alt="QR Code Button"
        style={{
          width: "150px",
          height: "150px",
          cursor: "pointer",
          border: "2px solid #1976d2",
          borderRadius: "8px",
        }}
        onClick={handleOpenPopup}
      />

      
      <QrCodePopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        qrValue={currentUrl}
        title="QR Code for This Page"
        heading="Generated QR Code"
        subheading="Scan this QR code to access the current page."
        imageUrl=""
      />
    </Box>
  );
};

export default Example;
