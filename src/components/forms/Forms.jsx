import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../utils/schemas";
import { useState } from "react";
import { StyledContact } from "./FormsStyles";

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
