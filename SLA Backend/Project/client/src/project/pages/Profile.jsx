import React, { useEffect, useState } from "react";

export default function Profile({ onLogout }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(u);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
    if (onLogout) onLogout();
    window.location.href = "/";
  };

  return (
    <div style={{ padding: 28 }}>
      <div style={{ maxWidth: 780, margin: "24px auto", background: "#fff", padding: 20, borderRadius: 12 }}>
        <h2 style={{ marginTop: 0 }}>Profile</h2>
        <p><strong>Email:</strong> {user || "Not logged in"}</p>

        <div style={{ marginTop: 18 }}>
          <button
            className="button"
            style={{ marginRight: 10 }}
            onClick={() => alert("Orders placeholder — add backend to fetch orders")}
          >
            My Orders
          </button>

          <button
            className="button"
            style={{ background: "#6c757d" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
