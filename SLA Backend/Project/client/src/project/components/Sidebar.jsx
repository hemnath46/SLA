import React from "react";
import "./Sidebar.css";

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="dark-sidebar">
      <h2 className="side-title">Categories</h2>

      <ul className="side-menu">
        <li
          className={active === "dresses" ? "active" : ""}
          onClick={() => onChange("dresses")}
        >
          👗 Dresses
        </li>

        <li
          className={active === "products" ? "active" : ""}
          onClick={() => onChange("products")}
        >
          🛍 Products
        </li>

        <li
          className={active === "feedback" ? "active" : ""}
          onClick={() => onChange("feedback")}
        >
          💬 Feedback
        </li>
      </ul>
    </aside>
  );
}
