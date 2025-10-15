"use client";
import React, { useState } from "react";
import "./Product.css";

export default function Product() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 3, name: "Laptop", price: 899.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
    { id: 4, name: "Smartphone", price: 699.99, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 5, name: "Camera", price: 549.99, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400" },
    { id: 6, name: "Gaming Console", price: 399.99, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400" },
    { id: 7, name: "Bluetooth Speaker", price: 79.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
    { id: 8, name: "Tablet", price: 329.99, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400" },
    { id: 9, name: "Fitness Tracker", price: 49.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400" }
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists)
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (!item) return prev;
      if (item.quantity === 1) return prev.filter((i) => i.id !== productId);
      return prev.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const removeProductCompletely = (productId) => {
    setCart((prev) => prev.filter((i) => i.id !== productId));
  };

  const totalItems = cart.reduce((t, i) => t + i.quantity, 0);
  const totalPrice = cart.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2);

  return (
    <div className="store-container">
      <h1>🛍️ Simple Web Store</h1>

      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => {
          const cartItem = cart.find((i) => i.id === product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              {!cartItem ? (
                <button className="add-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              ) : (
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(product.id)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => addToCart(product)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CART SUMMARY (Glassmorphism) */}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <strong>{item.name}</strong> × {item.quantity}
                <span>
                  <button className="id" onClick={() => removeFromCart(item.id)}>-</button>
                  <button className="id1" onClick={() => addToCart(item)}>+</button>
                  <button className="remove-all" onClick={() => removeProductCompletely(item.id)}>
                    ❌ Remove All
                  </button>
                </span>
              </div>
            ))}
            <div className="cart-totals">
              <p><strong>Total Items:</strong> {totalItems}</p>
              <p><strong>Total Price:</strong> ${totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
