import React from 'react';

const OrderSummary = ({ cart, placeOrder }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Items: {/* Calculate total items in the cart */}</p>
      <p>Total Price: {/* Calculate total price of items in the cart */}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
