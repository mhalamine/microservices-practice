const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});