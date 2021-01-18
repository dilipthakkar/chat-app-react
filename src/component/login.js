import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { IsAuth, signup } from "../auth/helper/authhelper";
import { auth } from "../services/firebase";
import MessageIcon from "@material-ui/icons/Message";
import "../styles/login.css";
// import { Container } from './styles';

function Login() {
  const [user, setUser] = useState(false);

  const preload = () => {
    // check is user sign in or not before laoding signup page
    if (IsAuth()) {
      setUser(IsAuth());
    } else {
      setUser(false);
    }
  };

  // login user
  const login = () => {
    signup();
  };

  useEffect(() => {
    preload();
    //attach a listner with user auth
    auth.onAuthStateChanged((user) => {
      setUser(IsAuth());
    });
  }, []);

  // if a user is sign in redirect it to chat page or show it login page
  return user ? (
    <Redirect to="/chat" />
  ) : (
    <div className="login__container">
      <div>
        <MessageIcon className="login__msgicon" />
      </div>

      <button
        className="gradient-button gradient-button-1 login__sendbtn"
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
