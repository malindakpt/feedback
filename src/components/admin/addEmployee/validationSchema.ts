import * as Yup from "yup";

export const employeeValidationSchema = Yup.object().shape({
  uid: Yup.string().required("User ID is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  companyId: Yup.string().required("Company is required"),
  branchId: Yup.string().required("Branch is required"),
  position: Yup.string().required("Position is required"),
  birthday: Yup.date()
    .max(new Date(), "Birthday cannot be in the future")
    .required("Birthday is required"),
  nic: Yup.string()
    .matches(
      /^(\d{9}[Vv]|\d{12})$/, 
      "NIC must be 9 digits followed by 'V' or 'v' or 12 digits"
    )
    .required("NIC is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
