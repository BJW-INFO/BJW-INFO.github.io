const fs = require('fs');
const path = require('path');

const outDir = 'out';
const nojekyllPath = path.join(__dirname, outDir, '.nojekyll');

fs.writeFile(nojekyllPath, '', (err) => {
  if (err) {
    console.error('Error creating .nojekyll file:', err);
    process.exit(1);
  }
  console.log('.nojekyll file created successfully.');
});