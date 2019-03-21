// Load environment variables from .env files
require('dotenv').config();

// Get some data from package.json
const packageJSON = require('@root/package.json');

module.exports = {
  name: packageJSON.name,
  version: packageJSON.version,
  prefix: '!glo',
  serverUrl: process.env.SERVER_URL || 'localhost',
  serverPort: process.env.SERVER_PORT || '3000',
  discordToken: process.env.DISCORD_TOKEN
};
