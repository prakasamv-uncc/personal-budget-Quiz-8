const express = require('express');
const mongoose = require('mongoose');

// Create an Express app
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define your routes and middleware here

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});