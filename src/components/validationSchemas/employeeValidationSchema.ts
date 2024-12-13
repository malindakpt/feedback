import * as Yup from "yup";

export const EmployeeValidationSchema = Yup.object().shape({
  company: Yup.string(),
  branch: Yup.string().test(
    "branch-dependency",
    "Branch is required once a company is selected",
    (value, context) => {
      return context.parent.company ? !!value : true;
    }
  ),
  empId: Yup.string().test(
    "empId-dependency",
    "Employee ID is required once a branch is selected",
    (value, context) => {
      return context.parent.branch ? !!value : true;
    }
  ),
  name: Yup.string().test(
    "name-dependency",
    "Name is required once Employee ID is entered",
    (value, context) => {
      return context.parent.empId ? !!value : true;
    }
  ),
  birthday: Yup.string().test(
    "birthday-dependency",
    "Birthday is required once a name is entered",
    (value, context) => {
      return context.parent.name ? !!value : true;
    }
  ),
  nic: Yup.string().test(
    "nic-dependency",
    "NIC is required once a birthday is entered",
    (value, context) => {
      return context.parent.birthday ? !!value : true;
    }
  ),
});
