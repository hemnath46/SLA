import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard({ onLogout }) {
  const [feedbackList, setFeedbackList] = useState([]);

  // Load feedback from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbackList(data.reverse()); // newest first
  }, []);

  // Delete feedback
  const deleteFeedback = (index) => {
    if (!window.confirm("Delete this feedback?")) return;

    const updated = [...feedbackList];
    updated.splice(index, 1);

    setFeedbackList(updated);
    localStorage.setItem("feedbackList", JSON.stringify(updated));
  };

  return (
    <div className="admin-container">

      <div className="admin-header">
        <h1>Admin Dashboard</h1>

        <button className="admin-logout" onClick={onLogout}>
          Logout
        </button>
      </div>

      {/* Feedback Section */}
      <h2 className="section-title">Latest Feedback</h2>

      <div className="feedback-grid">
        {feedbackList.length === 0 && (
          <p style={{ color: "white" }}>No feedback submitted yet.</p>
        )}

        {feedbackList.map((fb, index) => (
          <div key={index} className="fb-card">
            <h3>{fb.name}</h3>
            <p>{fb.message}</p>

            <div className="fb-bottom">
              <span className="star">⭐ {fb.rating || 0}</span>

              <button
                className="delete-btn"
                onClick={() => deleteFeedback(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Recent Orders</h2>
      <p style={{ color: "#ccc" }}>Order system not added yet.</p>
    </div>
  );
}
