import { UserRoles } from "../../enums/userRoles";

export interface User {
  id: string;
  firstName: string,
  lastName: string,

  companyId: string;
  branchId: string;
  position: UserRoles,
  birthday: string;
  nic: string;
  image?: string;
  email: string,
  password: string,
  employeeId: string,
  address: string,
  contactNumber: string,
}