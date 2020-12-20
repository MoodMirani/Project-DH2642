import React from "react";
import "./css/Login.css";
import { loginUrl } from "./spotify";

function Login() {
  window.scrollTo(0,0); 
  return (
    <div className="login">
      <img
        src="https://i.ibb.co/rsCJb8L/popify-Logo.png"
        alt="Popify logo"
        border="0"
      />
      <a href={loginUrl}>START POPIFYING</a>
    </div>
  );
}

export default Login;

