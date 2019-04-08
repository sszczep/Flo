// Load environment variables from .env files
require('dotenv').config();

// Get some data from package.json
const packageJSON = require('@root/package.json');

module.exports = {
  name: packageJSON.name,
  version: packageJSON.version,
  server: {
    url: process.env.SERVER_URL || 'localhost',
    port: process.env.SERVER_PORT || '3000'
  },
  slack: {
    token: process.env.SLACK_TOKEN
  }
};
