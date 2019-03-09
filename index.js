// Load environment variables from .env files
require('dotenv').config();

// Load module aliases
require('module-alias/register');

// Load signale (better console output)
const signale = require('signale');

// Handle node errors
['uncaughtException', 'unhandledRejection'].forEach(event => {
  process.on(event, error => {
    signale.fatal(error);
    process.exit(1);
  });
});

// Run app
module.exports = (async () => {
  try {
    signale.await('Starting app...\n');

    // Setup client and server for the first time
    const client = await require('@/Client/Discord');
    const server = await require('@/Server/Express');

    signale.success('App launched successfully!');

    return { client, server };
  } catch (error) {
    signale.fatal(error);
    process.exit(1);
  }
})();
