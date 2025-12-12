import React, { useEffect, useState } from "react";
import "./Admin.css";

export default function AdminPage() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Load feedback from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbacks(saved);
  }, []);

  // Delete a feedback item
  const deleteFeedback = (index) => {
    if (!window.confirm("Delete this feedback?")) return;

    let updated = [...feedbacks];
    updated.splice(index, 1);

    setFeedbacks(updated);
    localStorage.setItem("feedbackList", JSON.stringify(updated));
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin — Manage Feedback</h2>

      {feedbacks.length === 0 ? (
        <p className="no-feedback">No feedback submitted.</p>
      ) : (
        <div className="admin-feedback-list">
          {feedbacks.map((fb, index) => (
            <div key={index} className="admin-feedback-card">
              <h4>{fb.name}</h4>
              <p>{fb.message}</p>

              <button
                className="delete-btn"
                onClick={() => deleteFeedback(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
