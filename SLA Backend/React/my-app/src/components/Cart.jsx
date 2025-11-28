import { useState } from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Smartphone", price: 15000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);   // Add product to cart
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item, index) => index !== id)); // Remove using index
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Total items */}
      <h2>Total Cart Items: {cart.length}</h2>

      <h3>Products:</h3>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button 
            style={{ marginLeft: "10px" }} 
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h3>Selected Items:</h3>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {item.name} - ₹{item.price}
            <button 
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
