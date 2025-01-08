import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const totalAmount = calculateTotal();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  />
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                  Remove
                </button>
              </div>
              <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Cart Total: ${totalAmount}</h3>
          <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalAmount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert("Transaction completed by " + details.payer.name.given_name);
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      )}
    </div>
  );
}

export default Cart;
