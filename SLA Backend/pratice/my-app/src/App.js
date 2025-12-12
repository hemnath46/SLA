import React, { useState, useEffect } from "react";

import Header from "./project/components/Header";
import Sidebar from "./project/components/Sidebar";
import CartDrawer from "./project/components/CartDrawer";

/* USER PAGES */
import Dresses from "./project/pages/Dresses";
import Products from "./project/pages/Products";
import Feedback from "./project/pages/Feedback";
import Profile from "./project/pages/Profile";

/* AUTH PAGES */
import Login from "./project/pages/Login";
import Signup from "./project/pages/Signup";

/* ADMIN PAGES */
import AdminLogin from "./project/pages/AdminLogin";
import AdminDashboard from "./project/pages/AdminDashboard";

import { CartProvider } from "./project/context/CartContext";

export default function App() {
  const [view, setView] = useState("dresses");
  const [searchQ, setSearchQ] = useState("");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  // Auto login
  useEffect(() => {
    const remember = localStorage.getItem("remember");
    const user = localStorage.getItem("user");

    if (remember === "true" && user) {
      setView("dresses");
    }
  }, []);

  // ==========================
  // ADMIN PROTECTED ROUTING
  // ==========================
  if (view === "admin") {
    const isAdmin = localStorage.getItem("isAdmin");

    return isAdmin ? (
      <AdminDashboard
        onLogout={() => {
          localStorage.removeItem("isAdmin");
          setView("dresses");
        }}
      />
    ) : (
      <AdminLogin onSuccess={setView} />
    );
  }

  // ==========================
  // USER LOGOUT CONFIRMATION
  // ==========================
  const confirmLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
    setShowLogoutPopup(false);
    setView("login");
  };

  return (
    <CartProvider>
      {/* LOGOUT POPUP */}
      {showLogoutPopup && (
        <div className="logout-overlay">
          <div className="logout-modal">
            <h2>Logout?</h2>
            <p>Do you really want to logout?</p>

            <div className="logout-actions">
              <button className="yes-btn" onClick={confirmLogout}>
                Yes, Logout
              </button>
              <button
                className="no-btn"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AUTH PAGES */}
      {view === "login" ? (
        <Login onSwitch={setView} />
      ) : view === "signup" ? (
        <Signup onSwitch={setView} />
      ) : view === "profile" ? (
        <Profile onLogout={() => setView("dresses")} />
      ) : (
        <>
          {/* HEADER */}
          <Header
            onSearch={setSearchQ}
            onChangeView={setView}
            onUserLogout={() => setShowLogoutPopup(true)}
          />

          {/* CONTENT LAYOUT */}
          <div className="layout">
            <Sidebar active={view} onChange={setView} />

            <main className="content">
              {view === "dresses" && <Dresses query={searchQ} />}
              {view === "products" && <Products query={searchQ} />}
              {view === "feedback" && <Feedback />}
            </main>
          </div>

          {/* CART */}
          <CartDrawer />
        </>
      )}
    </CartProvider>
  );
}
