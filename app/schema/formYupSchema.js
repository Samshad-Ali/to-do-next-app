import * as yup from "yup";
export const formSchema = yup
  .object({
    title: yup.string().required("Title should not be empty"),
    description: yup.string().required('Description should not be empty'),
  })
  .required();
