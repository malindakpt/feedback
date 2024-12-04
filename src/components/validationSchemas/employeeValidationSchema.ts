import * as Yup from "yup";

export const EmployeeValidationSchema = Yup.object().shape({
  company: Yup.string().required("Company is required"),
  branch: Yup.string().required("Branch is required"),
  empId: Yup.string().required("Employee ID is required"),
  name: Yup.string().required("Name is required"),
  birthday: Yup.string().required("Birthday is required"),
  nic: Yup.string().required("NIC is required"),
});
