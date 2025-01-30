import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const handleShowUser = () => {
    navigate("/users");
  };
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <Link to="/">HOME</Link>
          </a>
        </div>
      </nav>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div>
        <button onClick={handleShowUser}>Show All Users</button>
      </div>
    </div>
  );
};

export default Home;
