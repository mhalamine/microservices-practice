// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API (order-service)
    axios.get('http://order-service:3001/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Microservices React App</h1>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(cartItem => (
          <li key={cartItem.id}>{cartItem.name} - ${cartItem.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
