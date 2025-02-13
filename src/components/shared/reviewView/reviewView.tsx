import React from "react";
import { Card, CardContent, Typography, CircularProgress, List } from "@mui/material";

interface ReviewViewProps {
  reviews: { id: string; comment: string }[];
  reviewloading: boolean;
  reviewerror: string | null;
}

const ReviewView: React.FC<ReviewViewProps> = ({ reviews, reviewloading, reviewerror }) => {
  return (
      <CardContent>
        <Typography variant="h6" fontWeight="bold">Reviews</Typography>
        {reviewloading ? (
          <CircularProgress />
        ) : reviewerror ? (
          <Typography color="error">{reviewerror}</Typography>
        ) : reviews?.length > 0 ? (
          <List>
            {reviews.map((review) => (
              <Card key={review.id} sx={{ mt: 1, p: 2, borderRadius: 1, boxShadow: 5 }}>
                <CardContent>
                  <Typography>{review.comment}</Typography>
                </CardContent>
              </Card>
            ))}
          </List>
        ) : (
          <Typography>No reviews available for this user.</Typography>
        )}
      </CardContent>
  );
};

export default ReviewView;
