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
        <p>Please log in or return to home:</p>
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </StyledUnauthorized>
    </>
  );
};
