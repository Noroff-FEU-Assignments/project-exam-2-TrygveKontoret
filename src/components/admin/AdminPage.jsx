import React from "react";
import { StyledUnauthorized } from "./AdminStyles";
import { Link } from "react-router-dom";

const AdminPage = () => {
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
