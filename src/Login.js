import React from "react";
import "./css/Login.css";
import { loginUrl } from "./spotify"; //enable our users to Login through the app

function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" 
        alt="Popify logo"
        border="0"
      />
      <a href={loginUrl}>START POPIFYING</a>
    </div>
  );
}

export default Login;

