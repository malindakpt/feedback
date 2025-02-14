import React, { useState } from "react";
import { useReviews } from "../../../hooks/useReviews";
import ReviewDisplay from "./reviewView";
import FilterReview from "../filterReview/filterReview";
import { Card } from "@mui/material";
import { ReviewFilter } from "../../../interfaces/reviewFilter";

interface ReviewContainerProps {
  userId?: string;
  companyId?: string;
  branchId?: string;
}

const ReviewContainer: React.FC<ReviewContainerProps> = (props) => {
  const [filters, setFilters] = useState<ReviewFilter>();

  // Identify which prop is provided
  const defaultContainer = props.userId ? { userId: props.userId } :
    props.companyId ? { companyId: props.companyId } :
    props.branchId ? { branchId: props.branchId } : {};

  const reviewFilter = { ...defaultContainer, ...filters };
  const { reviews, reviewloading, reviewerror } = useReviews(reviewFilter);

  return (
    <Card sx={{ mt: 3, p: 2, borderRadius: 3, boxShadow: 3 }}>
      <FilterReview onFilterChange={setFilters} />
      <ReviewDisplay
        reviews={reviews}
        reviewloading={reviewloading}
        reviewerror={reviewerror}
      />
    </Card>
  );
};

export default ReviewContainer;
