import React, { useState } from "react";
import { useEmployeeByEmpId } from "./useEmployeeByEmpId";
import { StarReview } from "../components/shared/rating/starReview";
import CommentBox from "../components/shared/comments";
import TextInput from "../components/shared/textInput/textInput";
import Button from "../components/shared/button/button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const EmployeeReviewPage: React.FC = () => {
  const [empId, setEmpId] = useState<string>("");
  const [searchEmpId, setSearchEmpId] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const { employee, loading, error } = useEmployeeByEmpId(searchEmpId); // Fetch employee based on searchEmpId

  const handleRatingChange = (value: number | null) => {
    setRating(value);
  };

  const handleCommentChange = (value: string) => {
    setComment(value);
  };

  const handleSubmit = () => {
    console.log({
      employeeId: empId,
      rating,
      comment,
    });
    alert("Review submitted successfully!");
    setRating(null);
    setComment("");
  };

  const handleInputChange = (name: string, value: string) => {
    if (name === "empId") {
      setEmpId(value);
    }
  };

  const handleSearch = () => {
    setSearchEmpId(empId);
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: "0 auto", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Employee Review Page
      </Typography>

      {/* Employee Search Section */}
      <TextInput
        label="Enter Employee ID"
        name="empId"
        value={empId}
        onChange={handleInputChange}
        required
      />
      <Button
        text="Search"
        color="primary"
        variant="contained"
        onClick={handleSearch}
      />

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
                borderRadius: 0, // Makes the Avatar square
                border: "1px solid #ccc",
              }}
            />
            <Box>
              <Typography>Name: {employee.name}</Typography>
              <Typography>Company: {employee.company}</Typography>
              <Typography>Branch: {employee.branch}</Typography>
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
