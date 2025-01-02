import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { StarReview } from "../shared/rating/starReview"; 
import Button from "../shared/button/button"; 
import CommentBox from "../shared/commentBox/comments"; 
import ImageUploader from "../shared/ImageUploader/imageUploader"; 

interface ReviewCompanyProps {
  company: {
    name: string;
    logoUrl: string;
    reviewTitle: string;
  } | null;
  loading: boolean;
  error: string | null;
  onSubmit: (
    comment: string,
    rating: number,
    file: File | null,
    reviewerName: string | null
  ) => void;
}

const ReviewCompany: React.FC<ReviewCompanyProps> = ({
  company,
  loading,
  error,
  onSubmit,
}) => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === null) {
      alert("Rating is required");
      return;
    }
    onSubmit(review, rating, file, null); // Submit the review data
    setOpen(true);
    resetFields();
  };

  const resetFields = () => {
    setReview("");
    setRating(null);
    setFile(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" textAlign="center">
        {error}
      </Typography>
    );
  }

  if (!company) {
    return (
      <Typography textAlign="center">No company details available.</Typography>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "2rem auto",
        borderRadius: "8px",
      }}
    >
      <Box textAlign="center">
        <img src={company.logoUrl} alt={company.name} width="100" />
        <Typography variant="h4" gutterBottom>
          {company.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {company.reviewTitle}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center" marginBottom={3}>
          <StarReview onRatingChange={setRating} value={rating} type="star" />
        </Stack>

        <Box marginBottom={3}>
          <CommentBox
            label="Write Your Review (Optional)"
            value={review}
            onChange={setReview}
          />
        </Box>

        <Box marginBottom={3}>
          <ImageUploader onSelect={setFile} uploadedUrl={null} />
        </Box>

        <Button
          text="Submit Review"
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={rating === null}
        />
      </form>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thank You for Your Review!</DialogTitle>
        <DialogContent>
          <Typography>Your review has been submitted successfully.</Typography>
          <Box mt={2}>
            {rating !== null && (
              <Typography>
                <strong>Rating:</strong> {rating} / 5
              </Typography>
            )}
            {review && (
              <Typography>
                <strong>Review:</strong> {review}
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            text="OK"
            color="primary"
            variant="outlined"
            onClick={handleClose}
          />
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ReviewCompany;
