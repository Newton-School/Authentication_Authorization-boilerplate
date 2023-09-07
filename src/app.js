const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'your-secret-key'; // Replace with your secret key

app.use(bodyParser.json());

// Mock user data (replace with a database in a real application)
const users = [
  // Define user objects here
];

// Authentication endpoint (students should implement this)
app.post('/login', (req, res) => {
  // Implement user authentication logic here
  // If authentication is successful, generate a JWT token and send it in the response
  // Example token generation:
  // const token = jwt.sign({ userId: user.id, username: user.username }, secretKey);
  // res.status(201).json({ token });
});

// Protected route (students should implement this)
app.get('/profile', (req, res) => {
  // Middleware to check for a valid JWT token
  // Implement JWT token verification logic here
  // If the token is valid, students can access the user's data from 'decoded'
  // Example response:
  // res.status(201).json({ message: 'Profile data', user: decoded });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
