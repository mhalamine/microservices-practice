const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});