import * as Yup from 'yup';
  // Validation schema using Yup

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  company: Yup.string().required("Company is required"),
  branch: Yup.string().required("Branch is required"),
  position: Yup.string().required("Position is required"),
});

  