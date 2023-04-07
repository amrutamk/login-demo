import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const loginData = {
    username: "amruta.pisal@gmail.com",
    password: "a123",
  };

  const handleUsername = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    setMessage("");
    if (username === "") {
      setMessage("Please enter Username.");
      return;
    }
    if (password === "") {
      setMessage("Please enter Password.");
      return;
    }

    if (username === loginData.username && password === loginData.password) {
      navigate("/profile");
    } else {
      setMessage("Invalid Username/Password.");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div id="login-text">
          <h2>Login</h2>
        </div>

        <div>
          <input
            id="input_box"
            type="text"
            placeholder="Username"
            onChange={handleUsername}
            value={username}
            required
          />
        </div>

        <div>
          <input
            id="input_box"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
            required
          />
        </div>

        <button id="login-btn" onClick={handleSubmit}>
          Login
        </button>
        <div id="error-msg">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
