import React from "react";
import { StyledUnauthorized } from "./AdminStyles";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { BOOKING_URL } from "../../utils/api";

const AdminPage = () => {
  const { data, loading, hasError } = useFetch(BOOKING_URL);

  return <div>Welcome</div>;
};

export default AdminPage;

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
