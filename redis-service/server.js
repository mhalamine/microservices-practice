const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');
const redisRoutes = require('./routes/redisRoutes');

// Create express
const app = express();
const PORT = 3005;

// setup redis
const redisUsername = 'ruser';
const redisPassword = 'rpassword';
const redisHost = 'redis';
const redisChannel = '99FM';


// Redis client
const redisClient = redis.createClient({
  host: 'redis',
  port: 5432,
});

redisClient.connect();

redisClient.on('ready', () => {
  console.log('\n Redis ready for action! \n');
  // call back fn is required
  redisClient.subscribe("article", async message => {
      console.log('subscriber service:- ', message);
      try {
          console.log("Redis-service: we have a message ")
      } catch (error) {
          console.log({ error });
      }
  });
});

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(bodyParser.json());

app.use('/api/redis', redisRoutes);

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});
