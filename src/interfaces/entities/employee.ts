export interface Employee {
  uid: string,
  firstName: string,
  lastName: string,
  companyId: string;
  branchId: string;
  position: string,
  birthday: string;
  nic: string;
  image?: string;
  email: string,
  password?: string,
}