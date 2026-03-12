import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-wrapper">
    <div className="auth-container">
      <h2>Login</h2>

      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit" className="auth-btn">Login</button>
      </form>

      <p className="switch-auth">
        Don’t have an account?
        <Link to="/signup"> Sign Up</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;