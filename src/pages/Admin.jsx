import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Admin = () => {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      {!auth ? <p>BITCH DU ER IKKE LOGGET INN</p> : <p>Bada bing bada bom</p>}
    </>
  );
};

export default Admin;
