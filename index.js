const express = require('express');
const path = require('path');
const fileRoutes = require('./src/fileRoutes');  // Adjusted the path to relative path

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'files' directory if you have any
app.use('/files', express.static(path.join(__dirname, 'files')));

// Use file routes from src directory
app.use('/api', fileRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
