export interface Review {
  id: string;
  companyId: string;
  branchId?: string;
  userId?: string;
  reviewerId: string | null;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string
}
