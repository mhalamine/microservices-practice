const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    res.send('<h1>Hello Welcome to Redis Cache :) !!!?</h1>');
});

module.exports = router;