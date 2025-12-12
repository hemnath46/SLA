import React, { useState, useEffect } from "react";
import "./Login.css";
import Loader from "../components/Loader";

export default function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // toast helper
  const showToast = (msg) => {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  // simple email regex
  const validEmail = (e) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      // already logged in
      // keep on homepage
      // window.location.href = "/";
    }
  }, []);

  const LoginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast("Fill all fields");
      return;
    }

    if (!validEmail(email)) {
      showToast("Invalid email address");
      return;
    }

    setLoading(true);

    // simulate request delay
    await new Promise((res) => setTimeout(res, 900));

    localStorage.setItem("user", email);
    // remember checkbox stored as string "true"/"false"
    const rememberVal = document.getElementById("remember")?.checked;
    if (rememberVal) localStorage.setItem("remember", "true");
    else localStorage.removeItem("remember");

    showToast("Login successful!");
    setLoading(false);
    // redirect to homepage (or set view via onSwitch)
    window.location.href = "/";
  };

  return (
    <>
      {loading && <Loader />}
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={LoginHandler}>
            <div className="input-group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>

            <div className="input-group pass-group">
              <input
                type={showPass ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>

              <span className="eye-icon" onClick={() => setShowPass(!showPass)}>
                {showPass ? "🙈" : "👁️"}
              </span>
            </div>

            <div style={{ marginTop: "10px", color: "white" }}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={{ marginLeft: "5px" }}>
                Remember me
              </label>
            </div>

            <button className="login-btn">Login</button>
          </form>

          <p className="switch-text">
            Don’t have an account?{" "}
            <span className="switch-link" onClick={() => onSwitch("signup")}>
              Register
            </span>
          </p>

          <p className="forgot-text" onClick={() => showToast("Reset link sent!")}>
            Forgot Password?
          </p>
        </div>
      </div>
    </>
  );
}
