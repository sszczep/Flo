// Load environment variables from .env files
require('dotenv').config();

// Load module aliases
require('module-alias/register');

// Load signale (better console output)
const signale = require('signale');

// Require Client class (we'll be using Discord here)
const Client = require('@/Client/Discord');

module.exports = (async () => {
  signale.info('Starting app...');

  const client = new Client();
  await client.login({ token: process.env.CLIENT_TOKEN });
})();
