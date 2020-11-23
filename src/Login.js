import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify"; //enable our users to Login through the app

function Login() {
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

