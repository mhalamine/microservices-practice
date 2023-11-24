const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

let orders = []; // In-memory storage for simplicity

// Get all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// Get a single order by ID
router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json(order);
});

// Create a new order
router.post('/', (req, res) => {
  const { products } = req.body;
  const id = Date.now().toString(); // For simplicity, use timestamp as ID
  const totalPrice = calculateTotalPrice(products);

  const newOrder = new Order(id, products, totalPrice);
  orders.push(newOrder);

  res.status(201).json(newOrder);
});

// Helper function to calculate total price of items in the order
function calculateTotalPrice(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

module.exports = router;
