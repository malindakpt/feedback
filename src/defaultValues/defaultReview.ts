import { ReviewFilter } from "../interfaces/reviewFilterT";

export const defaultReview: ReviewFilter = {
    minRating: 0,
    maxRating: 5,
    fromDate: new Date(),
    toDate: new Date(),   
    userId:"",
    companyId:"",
    branchId:"",
}
