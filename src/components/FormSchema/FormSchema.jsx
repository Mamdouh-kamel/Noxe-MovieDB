import * as yup from "yup";

export const schema = yup.object().shape({
  first_name: yup.string().required("first name is a required field"),
  last_name: yup.string().required("last name is a required field"),
  email: yup.string().email().required(),
  password: yup.string().required().min(6).max(12),
  age: yup.number().typeError("age must be between 18 and 80").required().positive().integer().min(18),
});
