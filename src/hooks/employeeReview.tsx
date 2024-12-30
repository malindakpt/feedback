import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployeeByEmpId } from "./useEmployeeByEmpId";
import { StarReview } from "../components/shared/rating/starReview";
import CommentBox from "../components/shared/comments";
import Button from "../components/shared/button/button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { createEntity } from "../services/crudService";
import { Collection } from "../enums/collections.enum";
import { Review } from "../interfaces/review";
import dayjs from "dayjs";
import useAuthenticatedUser from './useAuthenticatedUser';

const EmployeeReviewPage: React.FC = () => {
  const { empID } = useParams<{ empID: string }>();
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const { employee, loading, error } = useEmployeeByEmpId(empID || "");
  const { isAuthenticated, user } = useAuthenticatedUser();

  const handleRatingChange = (value: number | null) => {
    setRating(value);
  };

  const handleCommentChange = (value: string) => {
    setComment(value);
  };

  const handleSubmit = async () => {
    if (!rating || !empID) {
      alert("Please provide a rating and ensure employee details are loaded.");
      return;
    }

    const review: Review = {
      companyId: employee?.companyId || "",
      branchId: employee?.branchId || "",
      employeeId: empID,
      reviewerId: user?.email || "Anonymous",
      rating,
      comment,
      date: dayjs().format("YYYY-MM-DD HH:mm:ss"), 
    };

    try {
      const reviewId = await createEntity<Review>(Collection.Reviews, review);
      if (reviewId) {
        alert("Review submitted successfully!");
        setRating(null);
        setComment("");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit the review. Please try again.");
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: "0 auto", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Employee Review Page
      </Typography>

      {/* Loading, Error, or Employee Details */}
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      {employee && !loading && !error && (
        <Box sx={{ border: "1px solid #ccc", borderRadius: 2, padding: 2, mt: 4 }}>
          {/* Employee Details */}
          <Typography variant="h6">Employee Details</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              gap: 2,
            }}
          >
            <Avatar
              src={employee.image || ""}
              alt={employee.name}
              sx={{
                width: 100,
                height: 100,
                borderRadius: 0,
                border: "1px solid #ccc",
              }}
            />
            <Box>
              <Typography>Name: {employee.name}</Typography>
              <Typography>Company ID: {employee.companyId}</Typography>
              <Typography>Branch ID: {employee.branchId}</Typography>
              <Typography>NIC: {employee.nic}</Typography>
              <Typography>Birthday: {employee.birthday}</Typography>
            </Box>
          </Box>

          {/* Star Review Section */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">Rate Employee</Typography>
            <StarReview onRatingChange={handleRatingChange} />
            {rating !== null && (
              <Typography>Your Rating: {rating} star(s)</Typography>
            )}
          </Box>

          {/* Comment Box Section */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">Add Comments</Typography>
            <CommentBox
              label="Comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </Box>

          {/* Submit Button */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              text="Submit"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
              disabled={rating === null}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default EmployeeReviewPage;
