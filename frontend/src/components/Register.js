import React, { useState } from "react";
import "../App.css";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert(data.msg);
        Navigate("/");
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error(err);
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
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            required
          />
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
            {" "}
            <button type="submit">Register</button>
            <p>Already have an account?</p>
            <Link to="/login">
              <button>Login</button> {/* Navigate to register page */}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
