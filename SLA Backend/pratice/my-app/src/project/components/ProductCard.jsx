import React from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={item.img} alt={item.title} />

      <h3>{item.title}</h3>
      <p>{item.desc}</p>

      <div className="price-tag">₹{item.price}</div>

      <button
        className="add-btn"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
}
