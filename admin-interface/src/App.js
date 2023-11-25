// admin-interface/src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      // auth-service
      const response = await axios.post('http://localhost:3003/api/auth/login', {
        username,
        password,
      });
      if (response.data.success) {
        setLoggedIn(true);
      } else {
        alert('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleCreateProduct = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/products', {
        name: productName,
        price: productPrice,
      });

      if (response.data.success) {
        alert('Product created successfully!');
      } else {
        alert('Failed to create product. Please try again.');
      }
    } catch (error) {
      console.error('Error during product creation:', error);
      alert('An error occurred during product creation.');
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h1>Login</h1>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h1>Create Product</h1>
          <label>
            Product Name:
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
          </label>
          <br />
          <label>
            Product Price:
            <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
          </label>
          <br />
          <button onClick={handleCreateProduct}>Create Product</button>
        </div>
      )}
    </div>
  );
}

export default App;
