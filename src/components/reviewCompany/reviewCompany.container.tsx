import React from "react";
import { useParams } from "react-router-dom";
import { useCompany } from "../../hooks/useCompany";
import ReviewCompany from "./reviewCompany";
import { uploadImage } from "../../services/imageUploaderService";
import { db } from "../../services/auth/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ReviewCompanyContainer: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { company, loading, error } = useCompany(companyId || "");

  const handleSubmit = async (
    comment: string,
    rating: number,
    file: File | null,
    reviewerName: string | null
  ) => {
    try {
      if (!companyId) throw new Error("Invalid company ID");

      // Upload the image if provided
      let imageUrl: string | undefined = undefined;
      if (file) {
        imageUrl = await uploadImage(
          `reviews/${companyId}`,
          `${Date.now()}-${file.name}`,
          file
        );
      }

      // Prepare the review data
      const reviewData = {
        companyId,
        reviewerName: reviewerName || "Anonymous User",
        rating,
        comment,
        submittedAt: serverTimestamp(),
        imageUrl,
      };

      console.log("Saving review data:", reviewData);

      // Save to Firestore under `/companies/{companyId}/reviews`
      const reviewsCollectionRef = collection(
        db,
        "companies",
        companyId,
        "reviews"
      );
      const docRef = await addDoc(reviewsCollectionRef, reviewData);
      console.log("Review saved with ID:", docRef.id);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <ReviewCompany
      company={company ? { ...company } : null}
      loading={loading}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};

export default ReviewCompanyContainer;
