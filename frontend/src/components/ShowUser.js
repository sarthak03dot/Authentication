import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("http://localhost:5000/api/auth/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <Link to="/">HOME</Link>
          </a>
        </div>
      </nav>

      <div>
        <h2>Registered Users</h2>
        <div className="iser-List">
          {users.map((user) => (
            <div key={user._id} className="user-item">
              <p>
                <strong>Name:</strong>
                {user.name}
              </p>
              <p>
                <strong>Email:</strong>
                {user.email}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Link to="/register">
            <button>Register</button> {/* Navigate to register page */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
