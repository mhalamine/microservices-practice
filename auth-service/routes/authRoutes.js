const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth');

// Dummy user data for demonstration purposes
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
];

router.post('/login', (req, res) => {

    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

module.exports = router;