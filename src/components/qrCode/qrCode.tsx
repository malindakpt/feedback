import * as React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

export default function QrCode() {
  const [url, setUrl] = React.useState<string>("");
  const qrRef = React.useRef<HTMLDivElement | null>(null);

  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        const imageUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "qrcode.png";
        link.click();
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Generate QR Code
        </Typography>

        <form onSubmit={downloadQRCode} style={{ width: "100%" }}>
          <TextField
            label="Enter URL"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Download QR Code
          </Button>
        </form>

        {url && (
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }} ref={qrRef}>
            <QRCodeCanvas value={url} size={256} />
          </Box>
        )}
      </Box>
    </Container>
  );
}
