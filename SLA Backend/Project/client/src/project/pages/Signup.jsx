import React, { useState } from "react";
import "./Login.css";
import Loader from "../components/Loader";

export default function Signup({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (msg) => {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const SignupHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast("Fill all fields");
      return;
    }

    if (!validEmail(email)) {
      showToast("Invalid email");
      return;
    }

    setLoading(true);
    await new Promise((res) => setTimeout(res, 900));

    localStorage.setItem("user", email);
    showToast("Account created!");
    setLoading(false);

    window.location.href = "/";
  };

  return (
    <>
      {loading && <Loader />}
      <div className="login-container">
        <div className="login-box">
          <h2>Register</h2>

          <form onSubmit={SignupHandler}>
            <div className="input-group">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Email</label>
            </div>

            <div className="input-group">
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <label>Password</label>
            </div>

            <button className="login-btn">Create Account</button>
          </form>

          <p className="switch-text">
            Already have an account?{" "}
            <span className="switch-link" onClick={() => onSwitch("login")}>
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
