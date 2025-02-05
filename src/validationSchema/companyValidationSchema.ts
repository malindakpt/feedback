import * as Yup from 'yup';

export const CompanyValidationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    number: Yup.string().required("number is required"),
    address: Yup.string().required("address is required"),
});
