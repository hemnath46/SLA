import React, { useState } from "react";
import "./AdminLogin.css";

export default function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = "admin@hems.in";
    const validPass = "admin123";

    // Trim spaces to avoid mismatch
    if (email.trim() === validEmail && password.trim() === validPass) {
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("user", validEmail);

      onSuccess("admin");   // Load dashboard
      return;
    }

    setError("Invalid admin credentials");
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h2>Admin Login</h2>

        {error && <p className="admin-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="admin@hems.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="admin123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
