import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header({ onSearch, onChangeView, onUserLogout }) {
  const [signedInUser, setSignedInUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    setSignedInUser(user || "");
  }, []);

  return (
    <header className="dark-header">
      <div className="dark-logo" onClick={() => onChangeView("dresses")}>
        HEMS.IN
      </div>

      <div className="dark-search-box">
        <input
          type="text"
          placeholder="Search dresses..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <span className="dark-search-icon">🔍</span>
      </div>

      <div className="dark-header-actions">
        <button className="dark-nav-btn" onClick={() => onChangeView("products")}>
          Products
        </button>

        <button className="dark-nav-btn" onClick={() => onChangeView("feedback")}>
          Feedback
        </button>

        <button className="dark-nav-btn" onClick={() => onChangeView("admin")}>
          Admin
        </button>

        {signedInUser ? (
          <>
            <span className="dark-user-email">{signedInUser}</span>

            {/* Trigger popup */}
            <button className="dark-login-btn" onClick={onUserLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="dark-login-btn" onClick={() => onChangeView("login")}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}
