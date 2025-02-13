export interface ReviewFilter {
    minRating: number;
    maxRating: number;
    fromDate:Date;
    toDate:Date;
    userId:string;
    companyId:string;
    branchId:string;
}