import * as Yup from 'yup';
// Validation schema using Yup

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  nic: Yup.string().required("NIC is required"),
  birthday: Yup.date().required("Birthday is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  companyId: Yup.string().required("Company is required"),
  branchId: Yup.string().required("Branch is required"),
  position: Yup.string().required("Position is required"),
  uid: Yup.string().optional(),
});

