const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

const redis = require('redis');
// Redis client
const redisClient = redis.createClient({
  host: 'redis',
  port: 5432,
});


let products = []; // In-memory storage for simplicity

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Get all products
router.get('/redis', async (req, res) => {
  try {
    const data = {id:1, name:"this is an article"}
     await redisClient.connect();
     await redisClient.publish('article', JSON.stringify({"message":"Hello world from Asgardian!"}));
     await redisClient.disconnect();
     console.log("message sent")
     res.status(200).json({ message: 'success' });
     
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: 'failure', error });
  }
});

// Get a single product by ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

// Create a new product
router.post('/', (req, res) => {
  const { name, description, price, inventory } = req.body;
  const id = Date.now().toString(); // For simplicity, use timestamp as ID

  const newProduct = new Product(id, name, description, price, inventory);
  products.push(newProduct);

  res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', (req, res) => {
  const productId = req.params.id;
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, description, price, inventory } = req.body;
  const updatedProduct = new Product(productId, name, description, price, inventory);

  products[productIndex] = updatedProduct;

  res.json(updatedProduct);
});

// Delete a product
router.delete('/:id', (req, res) => {
  const productId = req.params.id;
  products = products.filter((p) => p.id !== productId);

  res.json({ message: 'Product deleted successfully' });
});


module.exports = router;
