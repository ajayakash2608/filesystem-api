// src/routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const fileController = require('E:\\Ajay\\Password-Reset\\file system projec\\file-system-api\\src\\fileController.js');

// Route for creating a file
router.post('/create-file', fileController.createFile);

// Route for retrieving all files
router.get('/files', fileController.getAllFiles);

module.exports = router;