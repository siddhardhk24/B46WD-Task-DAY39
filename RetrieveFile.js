const fs = require('fs');
const path = require('path');

const folderPath = '/Users/bhavishanth/Documents/All Codes/nodeapp'; // Replace with the actual folder path

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const textFiles = files.filter((file) => {
    // Filter out only the files with .txt extension
    return path.extname(file).toLowerCase() === '.txt';
  });

  console.log('Text files in the folder:', textFiles);
});
