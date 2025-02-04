export interface Review {
  companyId: string;
  branchId?: string;
  employeeId?: string;
  reviewerId: string | null;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string
}
