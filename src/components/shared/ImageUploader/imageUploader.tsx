import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"; // Replace the camera icon
import { retrieveImage} from "../../../services/imageUploaderService"; // Ensure these services exist and are correct
import defaultImage from "../../resourses/defaultImage.jpg"; // Import the default image

interface ImageUploaderProps {
  onSelect: (file: File | null) => void; 
  uploadedUrl: string | null; 
}

const ImageUploader = ({ onSelect, uploadedUrl }: ImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const imageUrl = await retrieveImage("profile-images", "user-id");
        setPreviewUrl(imageUrl); 
      } catch (error) {
        console.error("Failed to retrieve profile image", error);
      }
    };
    fetchProfileImage();
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    setPreviewUrl(null);
  };

  const handleSelect = () => {
    onSelect(selectedFile);
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
          <label htmlFor="icon-button-file">
            <IconButton color="primary" component="span">
              <AddAPhotoIcon style={{ color: "white", fontSize: "2rem" }} />
            </IconButton>
          </label>
        </div>
      </div>

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="icon-button-file"
        type="file"
        onChange={handleImageChange}
      />

      <Dialog open={openPreview} onClose={handleCancel}>
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          <img src={previewUrl || ""} alt="Preview" style={{ width: "100%", height: "auto" }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} variant="contained" color="secondary">Cancel</Button>
          <Button onClick={handleSelect} variant="contained" color="primary">Select</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageUploader;
