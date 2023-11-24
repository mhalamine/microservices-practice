import React from 'react';

const OrderSummary = ({ cart, placeOrder }) => {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
