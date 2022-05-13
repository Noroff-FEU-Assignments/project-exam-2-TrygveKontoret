import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../utils/schemas";
import { useState } from "react";
import { StyledForm } from "./FormsStyles";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { loginSchema } from "../../utils/schemas";
import { AUTH_URL, MSG_URL } from "../../utils/api";

export const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  // console.log(MSG_URL);

  // const responseData = axios.post(MSG_URL, {
  //   name: FormData.name,
  //   email: FormData.email,
  //   subject: FormData.subject,
  //   message: FormData.message,
  // });

  const checkSuccess = (FormData) => {
    setSuccess(true);
    reset();
    // const axios = require("axios");
    // let data = JSON.stringify({
    //   data: {
    //     name: FormData.name,
    //     email: FormData.email,
    //     subject: FormData.subject,
    //     message: FormData.message,
    //   },
    // });

    let data = axios.post(MSG_URL, {
      data: {
        name: FormData.name,
        email: FormData.email,
        subject: FormData.subject,
        message: FormData.message,
      },
    });

    // let config = {
    //   method: "post",
    //   url: MSG_URL,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // responseData(FormData);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(checkSuccess)}>
        <label>Name:</label>
        <input {...register("name")} placeholder="Please enter your name" />
        {errors.name && <span>{errors.name.message}</span>}

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
      </StyledForm>
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

    setAuth(responseData.data);
    console.log(auth);
    navigate("/admin");
  };

  const onSubmit = (FormData) => {
    userLogin(FormData);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
      </StyledForm>
    </>
  );
};
