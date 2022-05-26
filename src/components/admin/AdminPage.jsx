import React from "react";
import { StyledMessage, StyledUnauthorized } from "./AdminStyles";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { BOOKING_URL, MSG_URL } from "../../utils/api";

export const MessageAdmin = () => {
  const { data, loading, error } = useFetch(MSG_URL);

  return (
    <>
      <StyledMessage>
        {data.length > 0
          ? data.map((message, idx) => {
              return (
                <div key={idx} className="card">
                  <h4>Name: </h4>
                  <p>{message.attributes.name}</p>
                  <h4>Email:</h4>
                  <p>{message.attributes.email}</p>
                  <h4>Subject:</h4>
                  <p>{message.attributes.subject}</p>
                  <h4>Message:</h4>
                  <p>{message.attributes.message}</p>
                  <h4>Message date:</h4>
                  <p>{message.attributes.createdAt.substring(0, 10)}</p>
                </div>
              );
            })
          : "Loading"}
      </StyledMessage>
    </>
  );
};

export const AdminPage = () => {
  return (
    <>
      <MessageAdmin />
    </>
  );
};

export const Unauthorized = () => {
  return (
    <>
      <StyledUnauthorized>
        <h1>Unauthorized access!</h1>
        <p>Please login or return to home:</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </StyledUnauthorized>
    </>
  );
};
