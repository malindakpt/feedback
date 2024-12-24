interface Review {
    companyID: string;
    branchID?: string;
    employeeID?: string;
    reviewerName: string | null;
    rating: number;
    comment: string;
    date: string;
    imageURL?: string
  }
  