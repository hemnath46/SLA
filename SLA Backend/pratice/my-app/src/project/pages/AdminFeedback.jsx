import React, { useEffect, useState } from "react";
import "./AdminFeedback.css";

export default function AdminFeedback() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    setList(data.reverse());
  }, []);

  const deleteOne = (id) => {
    const updated = list.filter((f) => f.id !== id);
    setList(updated);
    localStorage.setItem("feedbacks", JSON.stringify(updated));
  };

  const clearAll = () => {
    if (window.confirm("Clear all feedbacks?")) {
      setList([]);
      localStorage.removeItem("feedbacks");
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">User Feedbacks</h2>

      {list.length === 0 ? (
        <p className="empty">No feedback available.</p>
      ) : (
        <>
          <button className="clear-all" onClick={clearAll}>
            Clear All
          </button>

          <div className="admin-list">
            {list.map((f) => (
              <div className="admin-card" key={f.id}>
                <h3>{f.name}</h3>
                <p className="msg">{f.msg}</p>
                <p className="rating">⭐ {f.rating} / 5</p>
                <p className="date">{f.date}</p>
                <button className="delete-btn" onClick={() => deleteOne(f.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
