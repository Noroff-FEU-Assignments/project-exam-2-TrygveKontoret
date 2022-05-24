import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../utils/schemas";
import { useRef, useState } from "react";
import { StyledForm } from "./FormsStyles";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { loginSchema, bookingSchema } from "../../utils/schemas";
import { AUTH_URL, BOOKING_URL, MSG_URL } from "../../utils/api";

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
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const userLogin = async (FormData) => {
    const responseData = await axios.post(AUTH_URL, {
      identifier: FormData.username,
      password: FormData.password,
    });

    setAuth(responseData.data.jwt);
    console.log(auth);
    navigate("/admin");
  };

  const onSubmit = (FormData) => {
    userLogin(FormData);
    if (!auth) {
      setError(!false);
      reset();
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
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
        {error && <span className="error">Wrong username or password</span>}
      </StyledForm>
    </>
  );
};

export const BookingForm = (data, closed) => {
  const dataRef = useRef();
  const [success, setSuccess] = useState(false);
  const [checkoutDate, setCheckoutDate] = useState();
  const [open, setOpen] = useState(closed);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const checkSuccess = (FormData) => {
    setSuccess(true);
    reset();

    let bookingData = axios.post(BOOKING_URL, {
      data: {
        hotel_name: data.data.attributes.name,
        name: FormData.name,
        email: FormData.email,
        room: FormData.room,
        checkin: FormData.checkin,
        checkout: FormData.checkout,
      },
    });
    setTimeout(() => {
      setSuccess(false);
      setOpen(!closed);
    }, 5000);
  };
  const formatYmd = (date) => date.toISOString().slice(0, 10);

  return (
    <>
      {open && (
        <StyledForm onSubmit={handleSubmit(checkSuccess)}>
          <label>Name:</label>
          <input {...register("name")} placeholder="Please enter your name" />
          {errors.name && <span>{errors.name.message}</span>}

          <label>Email:</label>
          <input {...register("email")} placeholder="Please enter your email" />
          {errors.email && <span>{errors.email.message}</span>}

          <label>Room:</label>
          <select {...register("room")}>
            <option>Please select room:</option>
            <option value="Small room">Small room</option>
            <option value="Medium room">Medium room</option>
            <option value="Large room">Large room</option>
          </select>
          {errors.room && <span>{errors.room.message}</span>}

          {/* <label>Checkin date:</label>
        <input
          {...register("checkin")}
          type="date"
          min={formatYmd(new Date())}
          ref={dateRef}
          onChange={() => {
            setCheckoutDate(dateRef.current.value);
          }}
        />
        {errors.checkin && <span>{errors.checkin.message}</span>} */}

          <label>Checkin date:</label>
          <input
            {...register("checkin")}
            type="date"
            min={formatYmd(new Date())}
            // ref={dataRef}
            // // onChange={() => {
            // //   setCheckoutDate(dataRef.current.value);
            // // }}
          />
          {errors.checkin && <span>{errors.checkin.message}</span>}

          <label>Checkout date:</label>
          <input {...register("checkout")} type="date" min={checkoutDate} />
          {errors.checkout && <span>{errors.checkout.message}</span>}

          <button>Send</button>
          {success && (
            <span className="success">Message successfully sent</span>
          )}
        </StyledForm>
      )}
    </>
  );
};
