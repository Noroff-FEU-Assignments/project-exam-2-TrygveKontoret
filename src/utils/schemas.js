import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Please fill in your name"),
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

const rooms = ["Small room", "Medium room", "Large room"];

export const bookingSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Please fill in your name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  room: yup
    .string()
    .oneOf(rooms, "Please select a room")
    .required("Please select a room"),

  checkin: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Please input checkin date"),
  checkout: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Please input checkout date"),
});

// room: yup.string().oneOf(rooms).required("Please select a room"),
