import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cart, changeQty, removeFromCart, clearCart, subtotal, totalQty } =
    useCart();
  const [open, setOpen] = useState(false);

  const entries = Object.values(cart);

  return (
    <>
      {/* Cart open button */}
      <button id="openCart" className="cart-btn" onClick={() => setOpen(true)}>
        Cart <span className="cart-badge">{totalQty}</span>
      </button>

      {/* Drawer */}
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-cart-btn" onClick={() => setOpen(false)}>
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-items">
          {entries.length === 0 && <p>Your cart is empty.</p>}

          {entries.map((e) => (
            <div key={e.item.id} className="cart-item">
              <img src={e.item.img} alt={e.item.title} />

              <div className="item-info">
                <h4>{e.item.title}</h4>
                <p>
                  ₹{e.item.price} × {e.qty} ={" "}
                  <b>₹{(e.item.price * e.qty).toLocaleString()}</b>
                </p>

                <div className="qty-controls">
                  <button onClick={() => changeQty(e.item.id, -1)}>-</button>
                  <span>{e.qty}</span>
                  <button onClick={() => changeQty(e.item.id, 1)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(e.item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="cart-footer">
          <p>
            Subtotal: <b>₹{subtotal.toLocaleString()}</b>
          </p>

          <button
            className="checkout-btn"
            onClick={() => {
              if (entries.length === 0) return alert("Your cart is empty");
              alert("Checkout — total: ₹" + subtotal.toLocaleString());
              clearCart();
              setOpen(false);
            }}
          >
            Checkout
          </button>

          <button
            className="clear-btn"
            onClick={() => {
              if (!window.confirm("Clear entire cart?")) return;
              clearCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      </aside>
    </>
  );
}
