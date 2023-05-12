import { FormValues } from "../../../models";

export const validate = (values: FormValues): FormValues => {
  const errors: FormValues = {
    username: "",
    password: "",
  };

  if (!values.username.length) errors.username = "No contine ningun caracter";
  if (!values.password.length) errors.password = "No contine ningun caracter";

  return errors;
};
