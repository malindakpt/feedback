import React, { useState } from "react";
import { useReviews } from "../../../hooks/useReviews";
import ReviewDisplay from "./reviewView";
import ReviewFilter from "../reviewFilter/reviewFilter";
import { Card } from "@mui/material";


interface ReviewContainerProps {
  userId: string;
  companyId: string;
  branchId: string;
}

const ReviewContainer: React.FC<ReviewContainerProps> = ({ userId }) => {
  const [filters, setFilters] = useState<{ ReviewFilter }>({});
  const { reviews, reviewloading, reviewerror } = useReviews(filters);

  return (
    <Card sx={{ mt: 3, p: 2, borderRadius: 3, boxShadow: 3 }} >
      <ReviewFilter onFilterChange={setFilters} />
      <ReviewDisplay
        reviews={reviews}
        reviewloading={reviewloading}
        reviewerror={reviewerror}
      />
    </Card>
  );
};

export default ReviewContainer;
