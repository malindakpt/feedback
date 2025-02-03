import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { retrieveImage } from "../../../services/imageUploaderService";
import defaultImage from "../../resourses/defaultImage.jpg";

interface ImageUploaderProps {
  disabled?: boolean;
  onChange: (file: File | null) => void;
  uploadedUrl: string | null;
  name?: string;
}

const ImageUploader = ({ disabled, onChange, uploadedUrl, name }: ImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [hovered, setHovered] = useState(false);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setOpenPreview(true);
    }
  };

  const handleCancel = () => {
    setOpenPreview(false);
    setSelectedFile(null);
  };

  const handleSelect = () => {
    onChange(selectedFile);
    setOpenPreview(false);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width: "150px",
          height: "150px",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #ccc",
          padding: "4px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={previewUrl || uploadedUrl || defaultImage}
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        {!disabled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <label htmlFor={`icon-button-file-${name || "imageUploader"}`}>
              <IconButton color="primary" component="span">
                <AddAPhotoIcon style={{ color: "white", fontSize: "2rem" }} />
              </IconButton>
            </label>
          </div>
        )}
      </div>

      <input
        accept="image/*"
        style={{ display: "none" }}
        id={`icon-button-file-${name || "imageUploader"}`}
        type="file"
        onChange={handleFileChange}
        disabled={disabled}
      />

      <Dialog open={openPreview} onClose={handleCancel}>
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          <img src={previewUrl || ""} alt="Preview" style={{ width: "100%", height: "auto" }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSelect} variant="contained" color="primary">
            Select
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageUploader;
