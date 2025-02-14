import { useEffect, useState } from "react";
import { readFilteredEntity, FilterCondition } from "../services/crudService";
import { Review } from "../interfaces/entities/review";
import { Collection } from "../enums/collections.enum";

interface ReviewFilter {
  companyId?: string;
  branchId?: string;
  userId?: string;
  minRating?: number;
  maxRating?: number;
  fromDate?: string; // YYYY-MM-DD format
  toDate?: string;   // YYYY-MM-DD format
}

export const useReviews = ({ companyId, branchId, userId, minRating, maxRating, fromDate, toDate }: ReviewFilter) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewloading, setLoading] = useState<boolean>(false);
  const [reviewerror, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const filters: FilterCondition[] = [];

        if (companyId) filters.push({ field: "companyId", operator: "==", value: companyId });
        if (branchId) filters.push({ field: "branchId", operator: "==", value: branchId });
        if (userId) filters.push({ field: "userId", operator: "==", value: userId });

        if (minRating !== undefined) filters.push({ field: "rating", operator: ">=", value: minRating });
        if (maxRating !== undefined) filters.push({ field: "rating", operator: "<=", value: maxRating });

        if (fromDate) filters.push({ field: "createdAt", operator: ">=", value: fromDate });
        if (toDate) filters.push({ field: "createdAt", operator: "<=", value: toDate });

        // Fetch filtered reviews
        const reviewData = await readFilteredEntity<Review>(Collection.reviews, filters);
        setReviews(reviewData || []);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [companyId, branchId, userId, minRating, maxRating, fromDate, toDate]);

  return { reviews, reviewloading, reviewerror };
};
