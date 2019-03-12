const fs = require('fs');
const path = require('path');

function loadFiles(directory) {
  // Get path of directory containing files
  const dir = path.join(__dirname, directory);

  // Iterate through every file in directory
  const files = fs.readdirSync(dir).map(file => {
    // Get path of file, its name and extension
    const filepath = path.join(dir, file);
    const [filename, extension] = file.split('.');

    // Accept only .js extensions
    if (extension !== 'js') return {};

    return {
      filename,
      content: require(filepath) // eslint-disable-line import/no-dynamic-require
    };
  });

  // Remove empty objects and return array
  return files.filter(obj => Object.keys(obj).length);
}

module.exports = loadFiles;
