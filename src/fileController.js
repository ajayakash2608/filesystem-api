// src/controllers/fileController.js
const fs = require('fs');
const path = require('path');
const { getCurrentTimestamp, getFormattedDate } = require('./utils/fileUtils');

// Task 1: Create a text file with the current timestamp
exports.createFile = (req, res) => {
  const folderPath = path.join(__dirname, '../../files');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  const filename = `${getFormattedDate()}.txt`;
  const filePath = path.join(folderPath, filename);
  const content = getCurrentTimestamp();

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating file' });
    }
    res.status(201).json({ message: `File created: ${filename}` });
  });
};

// Task 2: Retrieve all text files in the specified folder
exports.getAllFiles = (req, res) => {
  const folderPath = path.join(__dirname, '../../files');

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading directory' });
    }

    const textFiles = files.filter(file => path.extname(file) === '.txt');
    res.status(200).json({ files: textFiles });
  });
};