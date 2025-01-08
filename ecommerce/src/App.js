import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';  // Ensure this import is included
import Home from './Page/Home';
import Shop from './Page/shop';
import About from './Page/about';
import Contact from './Page/contact';
import Cart from './Page/cart';

function App() {
  const [cart, setCart] = useState([]); // Cart state to store cart items

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update product quantity in cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity to 0 or negative
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
