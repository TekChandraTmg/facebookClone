import React from "react";
import "./Login.css";
// import { auth, provider } from "../../firebase";

const Login = () => {
  //   const signIn = () => {
  //     //sign in
  //     auth
  //       .signInWithPopup(provider)
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => alert(error.message));
  //   };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
          alt=""
        />
        <img
          src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
          alt=""
        />
      </div>
      <button type="submit">Sign In</button>
    </div>
  );
};

export default Login;
