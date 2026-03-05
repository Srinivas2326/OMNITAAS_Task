import React, { useState, useEffect } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Load saved username
  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {

      const response = await API.post("/login", {
        username: username,
        password: password
      });

      // success
      if (response.status === 200) {

        localStorage.setItem("username", response.data.username);

        navigate("/welcome");

      }

    } catch (error) {

      // backend error message
      if (error.response) {
        setError(error.response.data.message);
      } 
      
      // network error
      else {
        setError("Server not reachable. Please try again.");
      }

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
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

      {error && <p className="error">{error}</p>}

    </div>
  );
}

export default Login;