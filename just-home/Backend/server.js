const express = require('express'); // Import Express
const app = express(); // Create an Express app
const PORT = 3000; // Define the port number

// Middleware to parse JSON data
app.use(express.json());

// Route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Expressiojofe!');
});

// Example API endpoint
// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello, API!' });
// });

// Start the server
app.listen(PORT);