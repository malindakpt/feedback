export interface ReviewFilter {
    minRating: number | undefined;
    maxRating: number | undefined;
    fromDate:Date | undefined ;
    toDate:Date | undefined ;
    userId:string;
    companyId:string;
    branchId:string;
}