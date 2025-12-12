import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name,
      message,
      date: new Date().toLocaleString(),
    };

    // Save feedback to localStorage
    const existing = JSON.parse(localStorage.getItem("feedbackList")) || [];
    existing.push(newFeedback);
    localStorage.setItem("feedbackList", JSON.stringify(existing));

    setName("");
    setMessage("");
    setShowPopup(true);
  };

  return (
    <div className="fb-container">
      <h2 className="fb-title">Send Your Feedback</h2>

      <form className="fb-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name..."
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Your Message</label>
        <textarea
          value={message}
          placeholder="Write your feedback..."
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="fb-btn">
          Submit
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Thank You! 🎉</h3>
            <p>Your feedback has been submitted successfully.</p>

            <button
              className="close-popup-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
