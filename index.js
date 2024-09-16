const express = require('express');
const path = require('path');
const fileRoutes = require('E:\\Ajay\\Password-Reset\\file system projec\\file-system-api\\src\\fileRoutes.js');  // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'files' directory if you have any
app.use('/files', express.static(path.join(__dirname, 'files')));

// Use file routes
app.use('/api', fileRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
