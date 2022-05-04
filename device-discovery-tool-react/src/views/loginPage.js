import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import React, { Component } from "react"
import logo from '../components/logo.png'
import '../App.css'

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <div className="login-image">
              <img src={logo} alt="STAPL Logo" className="login-image" />
            </div>
            <h3>Sign In</h3>
            <div className="login-fields">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter Username" required />
              <br></br>
            </div>
            <div className="login-fields">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" required />
            </div>
            <div className="button">
              <button type="submit" className="btn btn-primary">Log In</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;