import { UserRoles } from "../enums/userRoles";
import { User } from "../interfaces/entities/user";

export const defaultUser: User = {
    id: "",
    firstName: "",
    lastName: "",
    employeeId:"",
    address:"",
    contactNumber:"",
    birthday: "",
    nic: "",
    email: "",
    password: "",
    companyId: "",
    branchId: "",
    position: UserRoles.Employee,
    image: "",
}

