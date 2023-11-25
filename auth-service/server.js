// auth-service/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3003;

app.use(cors()); // Enable CORS
// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Auth Service is running on port ${PORT}`);
});
