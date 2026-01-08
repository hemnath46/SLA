import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard({ onLogout }) {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const res = await fetch("http://localhost:5000/api/feedback");
    const data = await res.json();
    setFeedbackList(data);
  };

  const deleteFeedback = async (id) => {
    if (!window.confirm("Delete this feedback?")) return;

    await fetch(`http://localhost:5000/api/feedback/${id}`, {
      method: "DELETE",
    });

    fetchFeedback();
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button className="admin-logout" onClick={onLogout}>
          Logout
        </button>
      </div>

      <h2 className="section-title">User Feedback</h2>

      <div className="feedback-grid">
        {feedbackList.length === 0 && (
          <p style={{ color: "#ccc" }}>No feedback yet</p>
        )}

        {feedbackList.map((fb) => (
          <div key={fb._id} className="fb-card">
            <h3>{fb.name}</h3>
            <p>{fb.message}</p>

            <div className="fb-bottom">
              <span>⭐ {fb.rating}</span>
              <button
                className="delete-btn"
                onClick={() => deleteFeedback(fb._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
