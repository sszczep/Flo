// Load environment variables from .env files
require('dotenv').config();

// Load module aliases
require('module-alias/register');

// Load signale (better console output)
const { Signale } = require('signale');

const signale = new Signale({ scope: 'App' });

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

    // Configure i18next
    await require('@root/i18next');

    // Load commands
    require('@client/CommandsContainer');

    // Setup client and server for the first time
    await require('@client/Discord');
    await require('@server/Express');

    signale.success('App launched successfully!');
  } catch (error) {
    signale.fatal(error);
    process.exit(1);
  }
})();
