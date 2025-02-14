import React from "react";
import { useParams } from "react-router-dom";
import { useBranchByBranchID } from "../../hooks/useBranchByBranchId";
import { useCompanyByCompanyID } from "../../hooks/useCompanyByCompanyId";
import { StarReview } from "../shared/rating/starReview";
import CommentBox from "../shared/commentBox/comments";
import Button from "../shared/button/button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createEntity } from "../../services/crudService";
import { Collection } from "../../enums/collections.enum";
import { Review } from "../../interfaces/entities/review";

interface FormValues {
  rating: number | null;
  companyId: string;
  comment: string;
  reviewerId: string | null;
  reviewerName: string;
}

const BranchReviewPage: React.FC = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const { branch, loading: branchLoading, error: branchError } = useBranchByBranchID(branchId || "");
  
  // Fetch company details using companyId from branch data
  const { company, loading: companyLoading, error: companyError } = useCompanyByCompanyID(branch?.companyId || "");

  console.log("Branch data:", branch);
  console.log("Company data:", company);

  const initialValues: FormValues = {
    rating: null,
    companyId: "",
    comment: "",
    reviewerId: "",
    reviewerName: ""
  };

  const validationSchema = Yup.object({
    rating: Yup.number().min(1, "Please provide a rating").required("Rating is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    if (!branchId || !branch?.companyId) {
      alert("Branch or Company details are missing.");
      return;
    }

    const review: Review = {
      branchId,
      companyId: branch.companyId, // Use companyId from branch data
      reviewerId: values.reviewerId,
      reviewerName: values.reviewerName,
      rating: values.rating!,
      comment: values.comment,
      date: ""
    };

    try {
      const reviewId = await createEntity<Review>(Collection.BranchReviews, review);
      if (reviewId) {
        alert("Review submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit the review. Please try again.");
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: "0 auto", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Branch Review Page
      </Typography>

      {branchLoading && <Typography>Loading branch details...</Typography>}
      {branchError && <Typography color="error">{branchError}</Typography>}
      {companyLoading && <Typography>Loading company details...</Typography>}
      {companyError && <Typography color="error">{companyError}</Typography>}

      {branch && company && !branchLoading && !companyLoading && (
        <Box sx={{ border: "1px solid #ccc", borderRadius: 2, padding: 2, mt: 4 }}>
          {/* Company Details */}
          <Typography variant="h6">Company Details</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
            <Avatar src={company.image || ""} alt={company.name} sx={{ width: 100, height: 100, borderRadius: 0, border: "1px solid #ccc" }} />
            <Box>
              <Typography><strong>Name:</strong> {company.name}</Typography>
              <Typography><strong>Industry:</strong> {company.industry}</Typography>
              <Typography><strong>Head Office:</strong> {company.headoffice}</Typography>
              <Typography><strong>Contact Number:</strong> {company.contactNumber}</Typography>
            </Box>
          </Box>
          
          {/* Branch Details */}
          <Typography variant="h6">Branch Details</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
            <Avatar src={branch.image || ""} alt={branch.name} sx={{ width: 100, height: 100, borderRadius: 0, border: "1px solid #ccc" }} />
            <Box>
              <Typography><strong>Name:</strong> {branch.name}</Typography>
              <Typography><strong>Location:</strong> {branch.location}</Typography>
              <Typography><strong>Manager:</strong> {branch.manager}</Typography>
            </Box>
          </Box>

          {/* Review Form with Formik */}
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6">Rate Branch</Typography>
                  <StarReview name="rating" errorText={touched.rating && errors.rating ? errors.rating : undefined} />
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6">Add Comments</Typography>
                  <Field name="comment" as={CommentBox} label="Comment" errorText={touched.comment && errors.comment ? errors.comment : undefined} />
                </Box>
                <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}>
                  <Button text="Submit" color="primary" variant="contained" type="submit" />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </Box>
  );
};

export default BranchReviewPage;
