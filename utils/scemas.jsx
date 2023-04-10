import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "cannot be less than two letters"),
  family: Yup.string().min(2, "cannot be less than two letters"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required").min(6,"cannot be less than six letters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(" Confirm Password is required"),
});

const loginSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  userPassword: Yup.string().required("Password is required"),
});

export { loginSchema, signUpSchema };
