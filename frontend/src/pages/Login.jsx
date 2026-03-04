import React, { useState, useEffect } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    const savedUser = localStorage.getItem("username");

    if (savedUser) {
      setUsername(savedUser);
    }

  }, []);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/login", {
        username,
        password
      });

      localStorage.setItem("username", res.data.username);

      navigate("/welcome");

    } catch (err) {

      setError("Invalid username or password");

    }

  };

  return (
    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

      {error && <p className="error">{error}</p>}

    </div>
  );
}

export default Login;