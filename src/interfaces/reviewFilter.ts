export interface ReviewFilter {
    minRating: string;
    maxRating: String;
    fromDate:Date;
    toDate:Date;
    userId:string;
    companyId:string;
    branchId:string;
}