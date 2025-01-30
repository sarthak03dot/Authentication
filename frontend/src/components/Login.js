import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      alert("Login Successful.");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <Link to="/">HOME</Link>
          </a>
        </div>
      </nav>
      <div className="box">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />

          <div>
            <button type="submit">Login</button>
            <p>Don't have an account?</p>
            <Link to="/register">
              <button>Register</button> {/* Navigate to register page */}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
