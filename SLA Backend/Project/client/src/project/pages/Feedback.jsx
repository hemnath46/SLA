import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message,
          rating,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }

      alert("Thank you for your feedback!");

      setName("");
      setMessage("");
      setRating(5);
    } catch (err) {
      alert("Server error. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="feedback-container">
      <h2>User Feedback</h2>

      <form className="feedback-form" onSubmit={submitHandler}>
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Your Message</label>
        <textarea
          placeholder="Write your feedback..."
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={5}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option>
        </select>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
