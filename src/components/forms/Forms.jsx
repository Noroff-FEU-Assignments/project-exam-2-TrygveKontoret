import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../utils/schemas";
import { useState } from "react";
import { StyledContact, StyledLogin } from "./FormsStyles";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { loginSchema } from "../../utils/schemas";
import { AUTH_URL } from "../../utils/api";

export const ContactForm = () => {
  const [success, setSucces] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const checkSuccess = () => {
    setSucces(true);
  };

  return (
    <>
      <StyledContact onSubmit={handleSubmit(checkSuccess)}>
        <label>First name:</label>
        <input
          {...register("firstName")}
          placeholder="Please enter your first name"
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}

        <label>Last name:</label>
        <input
          {...register("lastName")}
          placeholder="Please enter your last name"
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}

        <label>Email:</label>
        <input {...register("email")} placeholder="Please enter your email" />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Subject:</label>
        <input
          {...register("subject")}
          placeholder="Please enter your subject"
        />
        {errors.subject && <span>{errors.subject.message}</span>}

        <label>Message:</label>
        <textarea
          rows="4"
          cols="40"
          {...register("message")}
          placeholder="Please enter your message"
        />
        {errors.message && <span>{errors.message.message}</span>}

        <button>Send</button>
        {success && <span className="success">Message successfully sent</span>}
      </StyledContact>
    </>
  );
};

export const LoginForm = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const userLogin = async (FormData) => {
    const responseData = await axios.post(AUTH_URL, {
      identifier: FormData.username,
      password: FormData.password,
    });

    setAuth(responseData);
    console.log(auth);
    navigate("/admin");
  };

  const onSubmit = (formData) => {
    userLogin(formData);
  };

  return (
    <>
      <StyledLogin onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input {...register("username")} placeholder="Your username" />
        {errors.username && <span>{errors.username.message}</span>}

        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Your password"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button>Login</button>
      </StyledLogin>
    </>
  );
};
