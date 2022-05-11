import * as yup from "yup";

export const contactSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Please fill in your first name"),
  lastName: yup
    .string()
    .min(4, "Must be at least 4 characters")
    .required("Please fill in your last name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  subject: yup
    .string()
    .min(4, "Subject must be at least 4 characteers")
    .required("Please enter subject."),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Please enter your message"),
});

export const loginSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});
