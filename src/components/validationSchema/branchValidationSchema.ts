import * as Yup from "yup";

export const branchValidationSchema = Yup.object().shape({
  company: Yup.string().required("Company is required"),
  branchId: Yup.string().required("Branch ID is required"),
  branchName: Yup.string().required("Branch Name is required"),
  location: Yup.string().required("Location is required"),
  contactNumber: Yup.string()
    .required("Contact Number is required")
    .matches(/^[0-9]{10}$/, "Contact Number must be 10 digits"),
});
